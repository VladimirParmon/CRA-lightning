import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import { ErrorBoundary } from './utils/errorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <IconSettings iconPath='/assets/icons'>
      <App />
    </IconSettings>
  </ErrorBoundary>,
  document.getElementById('root'),
);
