import React, { Component } from "react";
import Node from "./Node";
import "./Dtable.css";
//import styled, { keyframes } from "styled-components";
//import { bounce } from "react-animations";
export default class Dtable extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      nodes: [],
      string1: "",
      string2: "",
      speed: 10,
    };
    this.state = this.initialState;
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  callGrid = () => {
    this.componentDidMount();
    this.animateLcs();
  };
  componentDidMount() {
    const nodes = [];
    console.log(this.state.string1.length);
    console.log(this.state.string2.length);
    for (let row = 0; row <= this.state.string1.length; row++) {
      var currentRow = [];
      for (let col = 0; col <= this.state.string2.length; col++) {
        if (row === 0 || col === 0) currentRow.push(0);
        else {
          if (this.state.string1[row - 1] === this.state.string2[col - 1]) {
            currentRow.push(nodes[row - 1][col - 1] + 1);
          } else {
            var a = currentRow[col - 1];
            var b = nodes[row - 1][col];
            currentRow.push(Math.max(a, b));
          }
        }
      }
      nodes.push(currentRow);
    }
    for (let i = 1; i <= this.state.string1.length; i++) {
      nodes[i][0] = this.state.string1[i - 1];
    }
    for (let i = 1; i <= this.state.string2.length; i++) {
      nodes[0][i] = this.state.string2[i - 1];
    }
    this.setState({ nodes });
  }
  animateLcs() {
    let root = document.documentElement;
    let spd = (11 - document.getElementById("speed").value) / 6;
    root.style.setProperty("--animdur", `${spd}s`);
    this.setState({speed: spd});
    console.log(`the speed is ${spd}`);
    for (let i = 1; i <= this.state.string1.length; i++) {
      for (let j = 1; j <= this.state.string2.length; j++) {
        setTimeout(() => {
          if (this.state.string1[i - 1] === this.state.string2[j - 1]) {
            document.getElementById(`node-${i}-${j}`).classList.remove("checked", "current");
            document.getElementById(`node-${i-1}-${j-1}`).classList.remove("checked", "current");
            document.getElementById(`node-${i-1}-${j}`).classList.remove("checked", "current");
            document.getElementById(`node-${i}-${j-1}`).classList.remove("checked", "current");

            document.getElementById(`node-${i-1}-${j}`).classList.add("visible");
            document.getElementById(`node-${i}-${j-1}`).classList.add("visible");
            document.getElementById(`node-${i-1}-${j-1}`).classList.add("visble");

            document.getElementById(`node-${i-1}-${j-1}`).classList.add("checked");
            document.getElementById(`node-${i}-${j}`).classList.add("current");

            document.getElementById("firstif").classList.remove("visited-line")
            void document.getElementById("firstif").offsetWidth;
            document.getElementById("firstifline").classList.remove("visited-line")
            void document.getElementById("firstifline").offsetWidth;

            document.getElementById("firstif").classList.add("visited-line");
            document.getElementById("firstifline").classList.add("visited-line");
          } else {
            document.getElementById(`node-${i}-${j}`).classList.remove("checked", "current");
            document.getElementById(`node-${i-1}-${j}`).classList.remove("checked", "current");
            document.getElementById(`node-${i}-${j-1}`).classList.remove("checked", "current");
            document.getElementById(`node-${i-1}-${j-1}`).classList.remove("checked", "current");

            document.getElementById(`node-${i-1}-${j}`).classList.add("checked");
            document.getElementById(`node-${i}-${j-1}`).classList.add("checked");
            document.getElementById(`node-${i}-${j}`).classList.add("current");

            document.getElementById(`node-${i-1}-${j}`).classList.add("visible");
            document.getElementById(`node-${i}-${j-1}`).classList.add("visible");
            document.getElementById(`node-${i-1}-${j-1}`).classList.add("visble");

            document.getElementById("firstelse").classList.remove("visited-line")
            void document.getElementById("firstelse").offsetWidth;
            document.getElementById("firstelseline").classList.remove("visited-line")
            void document.getElementById("firstelseline").offsetWidth;
            document.getElementById("firstelse").classList.add("visited-line");
            document.getElementById("firstelseline").classList.add("visited-line");
          }            
        }, 1000 * spd);
        spd = spd + 2;
      }
    }
        
  }
  render() {
    const { nodes } = this.state;
    console.log(nodes);
    return (
      <div>
        <div>HackTheAlgo: Longest Common Subsequence</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>string1: </label>
            <input
              type="text"
              name="string1"
              value={this.state.string1}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>string2: </label>
            <input
              type="text"
              name="string2"
              value={this.state.string2}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <button type="submit" onClick={this.callGrid}>
              generate
            </button>
          </div>
        </form>
        <div id="speedy">
          Speed
          <input
            type="range"
            id="speed"
            className="slider"
            name="points"
            min="1"
            max="10"
            onChange={this.callGrid}
          />
        </div>
        <table className="center">
          <tbody>
            <tr>
              <td>
                <div className="grid">
                  {nodes.map((row, rowIdx) => {
                    return (
                      <div key={rowIdx}>
                        {row.map((node, nodeIdx) => {
                          return (
                            <Node
                              key={nodeIdx}
                              row={rowIdx}
                              col={nodeIdx}
                              isVisited={false}
                              data={nodes[rowIdx][nodeIdx]}
                            ></Node>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </td>
              <td>
                <div className="code">
                  <ul>
                    <li>
                      <h4>&nbsp;&nbsp;&nbsp;&nbsp;Dynamic Programming</h4>
                    </li>
                    <li>
                      &nbsp;&nbsp;for (var i = 1; i &lt;= string1.length; i++)
                    </li>
                    <li>
                      &nbsp;&nbsp;&nbsp;&nbsp;for (var j = 1; j &lt;=
                      string2.length; j++)
                    </li>
                    <li id="firstif">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (string1[j - 1]
                      == string2[i - 1])
                    </li>
                    <li id="firstifline">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DP[i][j]
                      = DP[i - 1][j - 1] + 1;
                    </li>
                    <li id="firstelse">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else
                    </li>
                    <li id="firstelseline">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DP[i][j]
                      = max(DP[i - 1][j], DP[i][j - 1]);
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
