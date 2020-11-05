import React, { Component } from "react";
import Node from "./Node3";
import "./Knapsack.css";

export default class Knapsack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 10,
      nodes: [],
      currentRow:[],
      display: "",
      numberofnodes:0,
      data:[],
      data1:[]
    };
  }
  
  graphinput(node, edges,edges1) {
    var n = parseInt(node);
    var e = [];
    var e1=[];
    var k = 0;
    var kl=edges.length-edges.length/2;
    for (var i = 0; i < (kl); i++) {
        var data = [];
        var data1=[];
        for (var j = 0; j < 1; j++) {
            data.push(parseInt(edges.charAt(k)));
            data1.push(parseInt(edges1.charAt(k)));
            k +=2;
        }
        e.push(parseInt(data));
        e1.push(parseInt(data1));
        this.callGrid(); 
    }

    console.log("e"+e.length);
    console.log("e1"+e1.length);
    
    this.setState({data:e,data1:e1,numberofnodes:n});
    const nodes=[];
     for(let i=0;i<=this.state.data.length;i++)
     {
       let currentRow=[];
       for(let w=0;w<=this.state.numberofnodes;w++)
       {
       if(i===0||w===0)
       {
         currentRow.push(parseInt(0));
       }
       else
       {
         if(e[i-1]<=w)
         {
           let p=parseInt(e[i-1]);
           let r=parseInt(nodes[i-1][w-p]);
           let q=e1[i-1]+r;
           let s=parseInt(nodes[i-1][w])
           currentRow.push(Math.max(q,s)); 
          }
          else
          {
            currentRow.push(parseInt(nodes[i-1][w]));
          }
       }
       }       
     nodes.push(currentRow);
     }
     console.log(nodes);
     this.setState({ nodes });
     }
  
  
  
animateknap(){
  let root = document.documentElement;
  //let spd = (11 - document.getElementById("speed").value) / 6;
  let spd = 10/6;
  root.style.setProperty("--animdur", `${spd}s`);
  //console.log(`the speed is ${spd}`);

  for(let i=0;i<=this.state.numberofnodes;i++)
{
  for(let w=0;w<=this.state.data.length;w++)
  {
    setTimeout(()=>{
       
      if (this.state.data[i-1]<=w) {
        //let p= w-this.state.data[i-1];
        //let s=this.state.nodes[i-1][p];
        //let q=this.state.data1[i-1]+s;       
        document.getElementById(`node5-${i-1}-${w}`).classList.remove("checked2", "current2");
        document.getElementById(`node5-${i-1}-${w-this.state.data[i-1]}`).classList.remove("checked2", "current2");
        document.getElementById(`node5-${i-1}-${w}`).classList.add("visible");
        document.getElementById(`node5-${i-1}-${w-this.state.data[i-1]}`).classList.add("visible");
        document.getElementById(`node5-${i-1}-${w}`).classList.add("checked2");
        document.getElementById(`node5-${i-1}-${w-this.state.data[i-1]}`).classList.add("current2");

        document.getElementById("firstifline").classList.remove("visited-line2")
        void document.getElementById("firstifline").offsetWidth;

        document.getElementById("firstifline").classList.add("visited-line2");
      } 
      else {

        document.getElementById(`node5-${i}-${w}`).classList.add("checked2");
        document.getElementById(`node5-${i}-${w}`).classList.add("checked2");
        document.getElementById(`node5-${i}-${w}`).classList.add("current2");

        document.getElementById("firstelse").classList.remove("visited-line2")
        void document.getElementById("firstelse").offsetWidth;
        document.getElementById("firstelseline").classList.remove("visited-line2")
        void document.getElementById("firstelseline").offsetWidth;
        document.getElementById("firstelse").classList.add("visited-line2");
        document.getElementById("firstelseline").classList.add("visited-line2");
      }
    },1000*spd);
    spd=spd+2;
  }
}



}
  
    
  


  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  callGrid = () => {
   this.animateknap();
  };
  
  

  render() {
    const { nodes } = this.state;
    let n;
    let edges;
    let edges1;
    
    //console.log(nodes);
    return (
      
      <div>
        <form onSubmit={this.handleSubmit}>
        <h1>KnapSack Algorithm</h1>
        <p>Knapsack Capacity<input type="text" ref={node => { n = node; }} /></p>

        <p>Weight<input type="text" ref={node => { edges = node; }} /></p>
        <p>Value<input type="text" ref={node => { edges1 = node; }} /></p>
    
    <button type="submit" onClick={() => { this.graphinput(n.value, edges.value,edges1.value)}}>
            Submit
    </button>       
    
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
    
            <ul>
              
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;KnapSack</h4>
                &nbsp;&nbsp;for (var i = 0; i &lt;= n; i++)
                <p>&nbsp;&nbsp;&nbsp;&nbsp;for (var w = 0; w &lt;=
                weight; w++)</p>
              <li id="firstif">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (i===0||w===0)
                Dp[i][w]=0;
              </li>
              <li id="firstifline">
             <p> else if(wt[i-1] &lt;= w)</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DP[i][w]
                = max(val[i-1]+DP[i-1][w-wt[i-1]],DP[i-1][w]);
              </li>
              <li id="firstelse">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else
              </li>
              <li id="firstelseline">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DP[i][j]
                = DP[i - 1][w];
              </li>
            </ul>
        </td>
      </tr>
    </tbody>
  </table>
       

        </form>
    
          </div>
    );
  }
}
