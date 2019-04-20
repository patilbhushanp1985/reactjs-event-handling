import React, { Component } from 'react';
import './App.css';
import {CustomButtonComponent} from './event-handling/custom-button-component.js';

class App extends Component {
  render() {
    const User = {
      username : 'bpatil',
      emailAddress : 'bpatil@xpanxion.com'
    }
    return (
      <div className="App AppHeader">
        <div className="row">
          <div className="col-lg-12">
              <CustomButtonComponent userInfo={User}></CustomButtonComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
