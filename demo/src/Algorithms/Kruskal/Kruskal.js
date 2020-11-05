import React from 'react';
//import Konva from 'konva';
import { Stage, Layer,Text, Circle, Line } from 'react-konva';
class Kruskal extends React.Component {
    n = 0;
    parent = [];
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            graph: [],
            lines: [],
            connections: [],
            x: 0,
            y: 0,
            flag: false,
            message: ""
        };
    }

    union(x, y, connections) {
        console.log(x + "-----------" + y);
        //var lines = this.state.lines;
        //var graph = this.state.graph;
        var index1 = (x - 1) * 2;
        var index2 = (y - 1) * 2;
        var d = this.state.graph[index1];
        var c = this.state.graph[index2];

        let newgraph = this.state.graph.map((item, idx) => {
            if (idx === index1) {
                return <Circle id={item.props.id} x={item.props.x} y={item.props.y} radius={item.props.radius} fill="red" />;
            } else if (idx === index2) {
                return <Circle id={item.props.id} x={item.props.x} y={item.props.y} radius={item.props.radius} fill="red" />;
            } else {
                return item
            }

        })

        var index = d.props.id + "-" + c.props.id;
        let newline = this.state.lines.map((item, idx) => {
            if (item.props.id === index) {
                return <Line id={item.props.id} points={[d.props.x, d.props.y, c.props.x, c.props.y]} stroke="red" strokeWidth={3} />
            } else {
                return item
            }

        })

        this.setState({ flag: !this.state.flag })
        this.setState({
            graph: newgraph,
            lines: newline
        });


        var px = this.find(x);
        var py = this.find(y);
        if (px !== py) {

            this.parent[px] = py;
            this.n--;

        }


    }
    find(x) {

        if (this.parent[x] === x) {
            return this.parent[x];
        }
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    start(N, connections) {
        console.log(connections)
        for (var i = 0; i <= N; i++) {
            this.parent[i] = i;
        }

        connections.sort(function (a, b) { return (a[2] - b[2]) });

        var graph = []
        var lines = []

        var cx = 0, cy1 = 100, w = 300, cy2 = 300, cy;
        var flag = true;

        for (i = 0; i < N; i++) {
            console.log(N);
            if (flag) {
                cx = cx + w;
                cy = cy1;
            }
            else {
                cy = cy2;
            }
            flag = !flag;
            graph.push(<Circle id={i + 1} x={cx} y={cy} radius={50} fill="DarkGoldenRod" />);
            graph.push(<Text text={i + 1} x={cx} y={cy} fontSize={20} />);

        }

        for (i = 1; i <= connections.length; i++) {
            var index1 = (connections[i - 1][0] - 1) * 2;
            var index2 = (connections[i - 1][1] - 1) * 2;
            var weight = connections[i - 1][2];
            var a = graph[index1];
            var c = graph[index2];
            var index = a.props.id + "-" + c.props.id;
            lines.push(<Line id={index} points={[a.props.x, a.props.y, c.props.x, c.props.y]} stroke='black' strokeWidth={3} />)
            var tx = ((a.props.x + c.props.x) / 2);
            var ty = ((a.props.y + c.props.y) / 2);
            lines.push(<Text text={weight} x={tx} y={ty} fontSize={20} />)
        }




        this.setState({
            graph,
            lines,
            connections
        })


    }

    minimumCost(connections) {


        var j = this.state.i;

        var x = connections[j][0], y = connections[j][1];
        console.log("connections " + x + "  " + y);

        var index1 = (connections[j][0] - 1) * 2;
        var index2 = (connections[j][1] - 1) * 2;
        //var weight = connections[j][2];
        var d = this.state.graph[index1];
        var c = this.state.graph[index2];
        var index = d.props.id + "-" + c.props.id;
        console.log("index" + index)

        let newline = this.state.lines.map((item, idx) => {
            if (item.props.id === index) {
                return <Line id={item.props.id} points={[d.props.x, d.props.y, c.props.x, c.props.y]} stroke="blue" strokeWidth={3} />
            } else {
                return item
            }

        })

        this.setState({
            lines: newline,
        })
        if (this.find(x) !== this.find(y)) {
            this.setState({ x: x, y: y })
            this.setState({ flag: !this.state.flag })
            console.log(x + "     " + y)
            // this.union(x, y, this.state.connections);
        }

        console.log(j);

        this.setState({ i: this.state.i + 1 })

    }

    completed() {
        this.setState({ message: "Completed!!!" })
    }
    play(connections) {

        if (this.state.i === (connections.length) && this.state.flag === false) {
            this.completed();
        }
        else {
            if (this.state.flag === false) {
                this.minimumCost(connections);
            }
            else {
                this.union(this.state.x, this.state.y, connections)
            }
        }

        setTimeout(() => {
            if(this.state.i<=connections.length)
        this.play(this.state.connections);
      }, 2000);

    }

    decide(connections) {

        if (this.state.i === (connections.length) && this.state.flag === false) {
            return this.completed();
        }
        else {
            if (this.state.flag === false) {
                return this.minimumCost(connections);
            }
            else {
                return this.union(this.state.x, this.state.y, connections)
            }
        }

    }

    componentDidUpdate() {
        //console.log(this)
    }

    render() {

        return (
            <div>


                <div >
                    <button onClick={() => this.start(this.props.nodes, this.props.connections)}>start</button>
                    {/* <button onClick={() => this.start(4, [[1, 2, 3], [1, 3, 4], [1, 4, 1], [2, 4, 2]])}>start</button> */}
                    <button onClick={() => this.decide(this.state.connections)}>step</button>
                    <button onClick={() => this.play(this.state.connections)}>play</button>
                    
                    <Stage width={1600} height={400}>
                        <Layer id="layer">
                            {this.state.graph}
                            {this.state.lines}
                        </Layer>
                    </Stage>
                    <div style={{ marginLeft: "100px" }}>
                        <h2>  {this.state.message}</h2>
                    </div>

                </div>
            </div>
        );
    }
}


export default Kruskal;