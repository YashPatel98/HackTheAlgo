import React, { Component } from "react";
import "./box.css";
export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {row1,isVisited, data} = this.props;
    const extraClassName = isVisited
    ? 'box-visited' : '';
    return (
      <div id={`box-${row1}`} className={`box ${extraClassName}`}> {data} 
      </div>
    );
  }
}
