import React, { Component } from "react";
import Box from "./Box";
import "./visualization.css";
import ReactTooltip from 'react-tooltip'

export default class Fibonacci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      previous1: 0,
      previous2: 1,
      count: 1,
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  callfunc = () => {
    this.componentDidMount();
    this.animatefib1();
  };

  componentDidMount() {
    const boxes = [];
    console.log(this.state.value);
    let f1 = 0;
    let f2 = 1;
    let f = 1;

    for (let row = 0; row < this.state.value; row++) {
      f1 = f2;
      f2 = f;
      boxes.push(f);
      f = f1 + f2;
      //console.log(this.state.previous1,this.state.previous2,this.state.count);
    }
    this.setState({ boxes });
    console.log(boxes);
  }
  animatefib1() {
    let root = document.documentElement;
    let spd = (29 - document.getElementById("speed").value) / 6;
    root.style.setProperty("--animdur", `${spd}s`);
    console.log(`the speed is ${spd}`);
    for (let i = 2; i < this.state.value; i++) {
      setTimeout(() => {
        document.getElementById(`box-${i}`).className = "box box-visited";
        document.getElementById(`box-${i - 1}`).className = "box box1-visited1";
        document.getElementById(`box-${i - 2}`).className = "box box2-visited2";

        document.getElementById("first").classList.remove("visited-fline");
        void document.getElementById("first").offsetWidth;
        document.getElementById("second").classList.remove("visited-fline");
        void document.getElementById("second").offsetWidth;
        document.getElementById("zero").classList.remove("visited-line1");
        void document.getElementById("zero").offsetWidth;

        document.getElementById("first").classList.add("visited-fline");
        document.getElementById("second").classList.add("visited-line");
        document.getElementById("zero").classList.add("visited-line1");
      }, 1000 * i + spd);
    }
    this.setState({ speed: spd });
  }

  render() {
    const { boxes } = this.state;
    //console.log(boxes);
    return (
      <div>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1 className="center">Fibonacci Sequence</h1>
            <p style={{ fontSize: "20px" }}> <b>The Fibonacci sequence is a series of numbers where a number is the addition of the last two numbers, starting with 0, and 1. The Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
</b> </p>
            Enter The Value 

            <input
              className="center"
              type="number"
              name="value"
              value={this.state.value}
              onChange={this.changeHandler}
              min="2"
              max="20"
            />
     &nbsp;
            <button type="submit" onClick={this.callfunc} className="grid">
              Submit
            </button>
            <i class="fa fa-lightbulb-o" style={{ fontSize: "50px", marginLeft: "5%" }} data-tip="INPUT FORMAT <br /> Denomination-1,2,5<br />amount-7 <br/> Use comma to separate denomination." ></i><br />
          <h3 style={{ marginLeft: "370px" }}>HELP</h3>

          <ReactTooltip multiline={true} />

          </div>
        </form>
        <div id="speedy">
          Speed
          <input
            type="range"
            id="speed"
            className="slider"
            name="points"
            min="10"
            max="20"
            onChange={this.callfunc}
          />
        </div>
        <div className="grid">
          {boxes.map((row, rowIdx) => {
            return <Box row1={rowIdx} data={boxes[rowIdx]}></Box>;
          })}
        </div>
        <br/>
        <br/>
        <div className="code1">
          <ul>
            <li>for ( int i=2 i ; i &lt;= {this.state.value} ; i++ ) </li>
            <li>&#123;</li>
            <li>
              &nbsp;&nbsp;
              <b id="zero">
                {" "}
                fib <sub> i </sub>
              </b>
              <b> = </b>
              <b id="first">
                {" "}
                fib <sub> i-1 </sub>
              </b>
              <b> + </b>
              <b id="second">
                {" "}
                fib <sub> i−2 </sub>
              </b>
            </li>
            <li>&#125;</li>
          </ul>
        </div>
      </div>
    );
  }
}
//<p><li>for programe click here <a href="https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/" title="Fibonacci Programme ">Fibonacci Programme</a></li></p>
//<p><li>for application of fibonacci click here <a href="https://www.youtube.com/watch?v=l3-1pO4uGGE" title="Fibonacci Application ">Fibonacci Application</a></li></p>
