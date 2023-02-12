const path = require('path');

const multipleEntry = require('react-app-rewire-multiple-entry')([
  {
    entry: 'src/background/background.ts',
  },
]);

module.exports = function override(config, env) {
  config.module.rules = [
    // salesforce dependencies
    // this will compile salesforce lightning as src, not as package
    {
      test: /\.jsx?$/,
      include: ['node_modules/@salesforce/design-system-react'].map((someDir) =>
        path.resolve(process.cwd(), someDir),
      ),
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['react-app'],
      },
    },
  ].concat(config.module.rules);

  multipleEntry.addMultiEntry(config);

  return config;
};
