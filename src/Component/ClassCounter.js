import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  handle = () => {
    this.setState(p=>{
      return {count:p.count+1}
    })
  }
  render() {
    return (
      <div>
        <h1>Class Counter : {this.state.count}</h1>
        <button onClick={this.handle}>increment</button>
      </div>
    );
  }
}

export default ClassCounter;