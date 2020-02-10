import React, { Component } from 'react';
import {LuxComponent} from './LuxComponent';

// import components

class App extends Component {

  render() {
    return (
      <div>
     <LuxComponent questionText= 'how many states are there' answers = {['50','52', '48', '49']}> 
     </LuxComponent> 
     </div>
    );
  }
}

export default App;