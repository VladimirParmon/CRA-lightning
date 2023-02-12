import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import { ErrorBoundary } from './utils/errorBoundary';

//TODO: establish messaging channel with the background to fetch the data and rerender;

ReactDOM.render(
  <ErrorBoundary>
    <IconSettings iconPath='/assets/icons'>
      <App vanityName='John Doe' />
    </IconSettings>
  </ErrorBoundary>,
  document.getElementById('root'),
);
