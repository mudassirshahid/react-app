import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 5 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 },
  //   ],
  // };

  // handleIncrement = counter => {
  //   const counters = [...this.state.counters];   //USING SPREAD OPERATOR TO CLONE ARRAY FOR THIS WE WILL GET NEW ARRAY
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   console.log(this.state.counters[index]);
  //   this.setState({ counters })
  // };

  // handleReset = () => {
  //  const counters = this.state.counters.map(c => {
  //   c.value = 0;
  //   return c;
  //  });
  //  this.setState({ counters })
  // };

  // handleDelete = (counterId) => {
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters });
  // };

  render() {
    console.log('Counters - Rendered')
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          // onClick={this.handleReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            // onDelete={this.handleDelete}
            // onIncrement={this.handleIncrement}
            // onDelete={this.props.onDelete}
            // onIncrement={this.props.onIncrement}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter} //MAKE THIS ONE TIME TO NOT LOOK MESSY
          >
            {/* <h4>Title</h4> */}
            {/* <h4>Counter #{counter.id}</h4>   FOR DYNAMICALLY */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
