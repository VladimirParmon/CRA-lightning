import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Illustration from '@salesforce/design-system-react/components/illustration';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Illustration
            heading='Boostraping create-react-app 2x with Salesforce Lightning Design System'
            messageBody={
              <span>
                Step-by-step instruction can be found at{' '}
                <a href='https://github.com/synle/create-react-app-salesforce-lightning'>
                  this tutorial guide
                </a>
              </span>
            }
            path='/assets/images/illustrations/empty-state-no-access.svg#no-access'
            size='large'
          />
        </header>
      </div>
    );
  }
}

export default App;
