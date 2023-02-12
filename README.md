This is a Linkedin chrome extension that provides an easy integration with Salesforce

It is heavily based on create-react-app

It uses react-rewired to manipulate the webpack config

(primarily for two things - to provide the loader for react-salesforce-components library and to split code into several output files)

`npm run start` launches local dev server

`npm run build` makes the production build, that can be loaded as an extension in chrome
