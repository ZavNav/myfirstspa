import React, {Component} from "react";

class Counter extends Component{
    render() {
        return(
            <div className={"counterClass"}>
                <button className={"buttons"} onClick={this.props.decreaseCount}>-</button>
                <span className={"counterValue"}>{this.props.countValue}</span>
                <button className={"buttons"} onClick={this.props.increaseCount}>+</button>
            </div>
        )
    }
}

export default Counter;