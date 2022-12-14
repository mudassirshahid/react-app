import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps)
    console.log("prevState", prevState)
    if (prevProps.counter.value !== this.props.counter.value){
     //ajax call and get new data from the server
    }  
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  // state = {
  //   value: this.props.counter.value  //COMMENTING FOR REMOVE LOCAL STATE
  // tags: ['tag1', 'tag2', 'tag3']
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 })
  //   console.log("Increment Clicked", this);
  // };

  // // renderTags() {
  // //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  // //   return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>

  // // }

  // render() {
  //   // return <div>
  //   //     {this.state.tags.length === 0 && 'Please create a new tag!'}
  //   //     {this.renderTags()}
  //   //   </div>;
  //   return (
  //    <div>
  //      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
  //      <button onClick={this.handleIncrement} className="btn btn-secondary btn-lg">Increment</button>
  //      <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
  //    </div>
  //   );
  // }

  //EXAMPLE OF PASSING INLINE FUNCTION
  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ count: this.state.count + 1 });
  // };

  // render() {
  //   return (
  //    <div>
  //      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
  //      <button onClick={ () => this.handleIncrement(product)} className="btn btn-secondary btn-lg">Increment</button>

  //    </div>
  //   );
  // }

  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ count: this.state.count + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 })
  // }

  // render() {
  //   return (
  //    <div>
  //      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
  //      <button onClick={ this.doHandleIncrement} className="btn btn-secondary btn-lg">Increment</button>

  //    </div>
  //   );
  // }

  // FOR PASSING DATA TO COMPONENTS:

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });  //COMMENTING FOR REMOVE LOCAL STATE
  // };

  render() {
    console.log('Counter - Rendered')
    // console.log("props", this.props);
    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <span>Zero</span> : count;
  }
}

export default Counter;
