import React, { Component } from 'react';
import './index.css';
import {ReactTitle} from 'react-meta-tags';

class App extends Component {
  render() {
    
    return (
      // 54C
      <div className="page">
      {/* 58C */}
      <ReactTitle title="$wag"/>
        <body className="body">
          {/* 54E */}
          <img src={require('./assets/auth_logo.png')} alt="houser"/>
          {/* 54G */}
          <input type="text"/>
          <input type="text"/>
          <button>Login</button>
          <button>Register</button>
          {/* 54D */}
          <footer>
            Bango!
            {/* 54F */}
          <h1>Bingo!</h1>
        </footer>
        </body>
        
        
      </div>
    );
  }
}

export default App;
