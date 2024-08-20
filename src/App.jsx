import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
  };
  plusBtn = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  minusBtn = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div className="container">
<div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary" onClick={this.plusBtn}>+</button>
        <h1>{this.state.count}</h1>
        <button className="btn btn-danger" onClick={this.minusBtn}>-</button>
      </div>
      </div>
      
    );
  }
}
