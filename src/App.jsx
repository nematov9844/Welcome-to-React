import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
    step: 0,
  };
  plusBtn = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  minusBtn = () => {
    const { count } = this.state;
    this.setState({
      count: count - 1,
    });
  };
  plusStep = () => {
    const { count, step } = this.state;
    this.setState({
      step: step + count,
    });
  };
  minusStep = () => {
    const { count, step } = this.state;
    this.setState({
      step: step - count,
    });
  };
  render() {
    const { count, step } = this.state;
    return (
      <div className="container offset-5">
        <div className="d-flex my-4 gap-3">
          <button onClick={this.plusStep} className="btn btn-success">
            +
          </button>
          <h1>{step}</h1>
          <button onClick={this.minusStep} className="btn btn-success">-</button>
        </div>
        <div className="d-flex gap-3 mt-4 juctify-center">
          <button className="btn btn-primary" onClick={this.plusBtn}>
            +
          </button>
          <h1>{count}</h1>
          <button className="btn btn-danger" onClick={this.minusBtn}>
            -
          </button>
        </div>
      </div>
    );
  }
}
