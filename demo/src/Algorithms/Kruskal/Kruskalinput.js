import React from 'react';
import Kruskal from './Kruskal';
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

                <div>
                    <h1>Kruskal Algorithm</h1>
                Enter number of nodes<input type="text" ref={node => { n = node; }} />
                Edges<input type="text" ref={node => { edges = node; }} />
                    <button onClick={() => { this.graphinput(n.value, edges.value); n.value = ''; edges.value = ''; }}>
                        Submit
                </button>
                    <Kruskal nodes = {this.state.numberofnodes} connections={this.state.data}/>
                </div>

            </div>
        );
    }
}
//<div style={{ backgroundColor: "LightGray", height: "630px" }}>

export default KruskalInput;