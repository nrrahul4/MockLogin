import React, { Component } from 'react';
import Homepage from './components/mainpage';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
 import Login from './components/loginpage'
import './App.css';

class App extends React.Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
    };

  render() {
    return (
        <div >
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Homepage} />
                </div>
            </Router>
        
      </div>
    );
  }
}

export default App;
