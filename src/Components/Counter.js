import React from "react";

class Counter extends React.Component{

    constructor(){
super()
this.state = {
    count : 0,
    textP : ""
}

    }

    increment=()=> this.setState({count : this.state.count + 1})
    decrement=()=> this.state.count > 0 && this.setState({count : this.state.count -1})


    componentDidUpdate(){

document.title = this.state.count

}
componentDidMount(){
    document.title = "not found"
}

render(){
        return(
<div>
<h2>Counter Component</h2>

<button onClick={this.decrement}>-
</button>

<span>{this.state.count}</span>
<button onClick={this.increment}>+</button>

<br/>
<br/>
<h3>{this.state.textP}</h3>
<input type="text" onChange={(e)=> this.setState({textP : e.target.value})} />

</div>


        )


}


}

export default Counter