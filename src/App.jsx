import React, { Component } from "react";
import imag from "./assets/react.svg"
export default class App extends Component {
  state = {
    count: 0,
    step: 0,
    counter: [0],
  };

  addCounter = () => {
    this.setState((prevState) => ({
      counter: [...prevState.counter, 0],
    }));
  };

  plusCount = (index) => {
    this.setState((prevState) => {
      const newCounter = [...prevState.counter];
      newCounter[index] += 1;
      return { counter: newCounter };
    });
  };

  minusCount = (index) => {
    this.setState((prevState) => {
      const newCounter = [...prevState.counter];
      newCounter[index] -= 1;
      return { counter: newCounter };
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="d-flex align-items-center pt-4 flex-column gap-3">
        <img src={imag} alt="salom" width={"400px"} />
        <div className="d-flex justify-content-center flex-column align-items-center pt-4">
          <button className="btn btn-success" onClick={this.addCounter}>Add Btn</button>
          {counter.map((item, index) => {
            return (
              <div key={index} className="my-2 d-flex gap-3 align-items-center">
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => this.plusCount(index)}
                >
                  +
                </button>
                <h1>{item}</h1>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => this.minusCount(index)}
                >
                  -
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
