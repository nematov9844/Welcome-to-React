import React, { Component } from "react";
import imag from "./assets/react.svg";

export default class App extends Component {
  state = {
    count: 0,
    step: false,
    counter: [0],
    users: [
      {
        id: "1",
        firstname: "John",
        lastname: "Smith",
        age: "45",
        dept_number: "100",
        city: "Chicago",
        state: "IL",
        salary: "$1000",
      },
      {
        id: "2",
        firstname: "Jane",
        lastname: "Doe",
        age: "25",
        dept_number: "100",
        city: "Phoenix",
        state: "AZ",
        salary: "$5000",
      },
      {
        id: "3",
        firstname: "Mary",
        lastname: "Smith",
        age: "17",
        dept_number: "200",
        city: "New York",
        state: "NY",
        salary: "$3000",
      },
      {
        id: "4",
        firstname: "George",
        lastname: "Edwards",
        age: "50",
        dept_number: "300",
        city: "Los Angeles",
        state: "CA",
        salary: "$7000",
      },
      {
        id: "5",
        firstname: "Emily",
        lastname: "Johnson",
        age: "16",
        dept_number: "150",
        city: "Houston",
        state: "TX",
        salary: "$2500",
      },
      {
        id: "6",
        firstname: "Michael",
        lastname: "Brown",
        age: "22",
        dept_number: "120",
        city: "Seattle",
        state: "WA",
        salary: "$4000",
      },
      {
        id: "7",
        firstname: "Anna",
        lastname: "Davis",
        age: "30",
        dept_number: "180",
        city: "Miami",
        state: "FL",
        salary: "$3500",
      },
      {
        id: "8",
        firstname: "Chris",
        lastname: "Wilson",
        age: "15",
        dept_number: "140",
        city: "Dallas",
        state: "TX",
        salary: "$2000",
      },
      {
        id: "9",
        firstname: "Sophia",
        lastname: "Taylor",
        age: "18",
        dept_number: "160",
        city: "San Francisco",
        state: "CA",
        salary: "$5000",
      },
      {
        id: "10",
        firstname: "Ethan",
        lastname: "Moore",
        age: "17",
        dept_number: "190",
        city: "Boston",
        state: "MA",
        salary: "$2700",
      },
    ],
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

  toggleStep = () => {
    this.setState((prevState) => ({
      step: !prevState.step,
    }));
  };

  filterAge = () => {
    this.setState((prevState) => {
        const newUsers = prevState.users.filter(item => item.age > 18);
        return { users: newUsers };
    });
}


  render() {
    const { counter, step, users } = this.state;
    return (
      <div className="flex flex-col items-center pt-4 gap-3">
        <div className="flex flex-col items-center pt-4">
          <button className="bg-blue-500 text-white py-1 px-2 rounded-md" onClick={this.addCounter}>
            Add Btn
          </button>
          {counter.map((item, index) => {
            return (
              <div key={index} className="my-2 flex gap-3 items-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => this.plusCount(index)}
                >
                  +
                </button>
                <h1>{item}</h1>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => this.minusCount(index)}
                >
                  -
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <h1>{step ? "salom" : "hayr"}</h1>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={this.toggleStep}
          >
            btn
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <button onClick={this.filterAge} className="bg-blue-600 text-white py-1 px-2 rounded-md">
            Armiyaga qabul qilish
          </button>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left border-b">ID</th>
                <th className="py-3 px-6 text-left border-b">First Name</th>
                <th className="py-3 px-6 text-left border-b">Last Name</th>
                <th className="py-3 px-6 text-left border-b">Age</th>
                <th className="py-3 px-6 text-left border-b">Dept Number</th>
                <th className="py-3 px-6 text-left border-b">City</th>
                <th className="py-3 px-6 text-left border-b">State</th>
                <th className="py-3 px-6 text-left border-b">Salary</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {users.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.age}</td>
                    <td>{item.dept_number}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.salary}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
