import React from 'react';
import Kruskal from './Kruskal';
import ReactTooltip from 'react-tooltip'
class KruskalInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberofnodes:0,
            data:[]
        };
    }
    
    graphinput(node, edges) {
        var n = parseInt(node);
        var e = [];
        var k = 0;
        for (var i = 0; i < (edges.length/6); i++) {
            var data = [];
            for (var j = 0; j < 3; j++) {
                data.push(edges.charAt(k));
                k += 2;
            }
            e.push(data);
        }
        console.log("e"+e);
        this.setState({data:e,numberofnodes:n});
    }

    render() {
        let n;
        let edges;
        return (
            <div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
                
                <div>
                    <h1>Kruskal Algorithm</h1>
                    <p style={{ fontSize: "20px" }}> <b>Kruskal's algorithm is a minimum spanning tree algorithm that takes a graph as input and finds the subset of the edges of that graph which
form a tree that includes every vertex and has the minimum sum of weights among all the trees that can be formed from the graph.
</b> </p>
                Number of nodes<input type="text" ref={node => { n = node; }} />
                Edges<input type="text" ref={node => { edges = node; }} />
                    <button onClick={() => { this.graphinput(n.value, edges.value); n.value = ''; edges.value = ''; }}>
                        Submit
                </button>
                <i class="fa fa-lightbulb-o" style={{ fontSize: "50px", marginLeft: "5%" }} data-tip="INPUT FORMAT <br /> Number of nodes-5<br />Edges-1,2,3;2,3,4;1,4,6; <br/> 1,2,3; represent edge between node 1 and 2 with weight 3.<br/> Use single digit for weight.<br>Maximum 10 nodes graph is possible" ></i><br />
                    <h3 style={{ marginLeft: "700px" }}>HELP</h3>

                    <ReactTooltip multiline={true} />
                    <Kruskal nodes = {this.state.numberofnodes} connections={this.state.data}/>
                </div>

            </div>
        );
    }
}
//<div style={{ backgroundColor: "LightGray", height: "630px" }}>

export default KruskalInput;