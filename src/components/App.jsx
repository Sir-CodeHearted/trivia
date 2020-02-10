import React, { Component } from 'react';
import {LuxComponent} from './LuxComponent';
import {buildFirebase} from '../clients/firebase';

// import components

class App extends Component {
 constructor(props) {
   super(props);
   this.gonget();
 }
 gonget (){
 var database = buildFirebase();
 var databaseRef = database.ref("/questions");
 databaseRef.once("value").then(function(data){
   const questions = data.val();
   console.log(questions) 
 });

 }




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