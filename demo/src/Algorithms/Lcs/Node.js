import React, { Component} from "react";
//import Fade from 'react-reveal/Fade'
import "./Node.css";
export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const {row,col,data} = this.props;
    /*const extraClassName = isVisited
    ? 'head-visited' : '';*/
    const extraClassName = ' ';
    return (
      <div id={`node-${row}-${col}`} className={`node ${extraClassName}`}><div className="innum">{data}</div></div>
    );
  }
}
