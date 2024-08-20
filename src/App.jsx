import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
  };
  plusBtn = () => {
    const {count} = this.state
    this.setState({
      count: count + 1,
    });
  };
  minusBtn = () => {
    const {count} = this.state
    this.setState({
      count: count - 1,
    });
  };
  render() {
    const {count} = this.state
    return (
      <div className="container">
<div className="d-flex gap-3 mt-4 juctify-center">
        <button className="btn btn-primary" onClick={this.plusBtn}>+</button>
        <h1>{count}</h1>
        <button className="btn btn-danger" onClick={this.minusBtn}>-</button>
      </div>
      </div>
      
    );
  }
}
