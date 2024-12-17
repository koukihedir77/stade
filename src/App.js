import React from 'react';

import './App.css';
import Counter from './Components/Counter';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      show : true
    }
  
  }

  render(){
    return(
      <div>
        <h1>Workshop React State</h1>
        <button className={this.state.show ? 'ahmer' : 'akther'} onClick={()=>this.setState({show : !this.state.show})}>{this.state.show ? 'Hide' : "show"}</button>
      
      
      {
        this.state.show && <Counter/>
      }
      
      </div>
    )
  }


}


export default App;
