import React, {Component} from 'react';
import Header from '../Header/Header.js';
import ViewLayer from '../ViewLayer/ViewLayer';
import './App.css';

class App extends Component {

  render(){
    return(
      <div>
        <Header/>
          <ViewLayer/>
      </div>
    );
  }
}
export default App;
