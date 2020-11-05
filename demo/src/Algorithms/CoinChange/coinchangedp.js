import React from 'react';
import { Stage, Layer, Rect, Text} from 'react-konva';
class CoinChangeDp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            V: 0,
            deno: [],
            ans: [],
            denominationanimate: [],
            amountanimate: [],
            dp: [],
            i: 0,
            j: 0,
            message: "",
            result: 0,
            flag:false,
            code:[],



        };
    }

    start(deno, V) {

        var d = [];
        //var a = [];
        this.setState({
            deno: deno,
            V: V,
        })

        var code=[]
        var cx=900,cy=100;
        code.push(<Text id="c1" text="for (var i = 0; i < deno.length; i++) {" x={cx} y={cy} fontSize={20} />);
        code.push(<Text id="c2" text="    for (var j = 0; j <= V; j++) {" x={cx} y={cy+25} fontSize={20} />);
        code.push(<Text id="c3" text="       if (i == 0 || j == 0)" x={cx} y={cy+50} fontSize={20} />);
        code.push(<Text id="c4" text="           dp[i][j] = j;" x={cx} y={cy+75} fontSize={20} />);
        code.push(<Text id="c5" text="       else if(j<=deno[i])" x={cx} y={cy+100} fontSize={20} />);
        code.push(<Text id="c6" text="           dp[i][j] = dp[i - 1][j];" x={cx} y={cy+125} fontSize={20} />);
        code.push(<Text id="c7" text="       else" x={cx} y={cy+150} fontSize={20} />);
        code.push(<Text id="c8" text="           dp[i][j] =min(dp[i - 1][j], dp[i][j -deno[i]] + 1);" x={cx} y={cy+175} fontSize={20} />);
        code.push(<Text id="c9" text="     }" x={cx} y={cy+200} fontSize={20} />);
        code.push(<Text id="c10" text=" }" x={cx} y={cy+225} fontSize={20} />);


        var rx = 150, ry = 100;
        var ii = 1
        for (var i = 0; i <= deno.length; i++) {
            for (var j = 0; j <= V + 1; j++) {

                if (i === 0 && j !== 0) {

                    d.push(<Rect id={ii} x={rx} y={ry} width={50} height={50} fill="rgb(196,98,16)" stroke="black" strokeWidth={4} />);
                    d.push(<Text id={ii} text={j - 1} x={rx + 25} y={ry + 25} fontSize={20} />);
                }
                else if (j === 0) {

                    d.push(<Rect id={ii} x={rx} y={ry} width={50} height={50} fill="rgb(196,98,16)" stroke="black" strokeWidth={4} />);
                    d.push(<Text id={ii} text={deno[i - 1]} x={rx + 25} y={ry + 25} fontSize={20} />);
                }
                else {
                    var id = (i - 1) + " " + (j - 1);
                    d.push(<Rect id={id} x={rx} y={ry} width={50} height={50} fill="orange" stroke="black" strokeWidth={4} />);
                    // d.push(<Text text={id} x={rx + 25} y={ry + 25} fontSize={20} />);
                }


                rx = rx + 50;
            }
            ry = ry + 50;
            rx = 150;
        }

        d.push(<Text id={ii} text="Amount" x={200} y={70} fontSize={20} />);
        d.push(<Text id={ii} text="Denomination" x={0} y={150} fontSize={20} />);
        var b = [];
        for (i = 0; i < deno.length; i++) {
            b[i] = [];
        }
        //console.log(b);
        this.setState({
            denominationanimate: d,
            dp: b,
            code:code

        })


    }

    algo() {

        var i = this.state.i;
        var j = this.state.j;
        var dp = this.state.dp;

        var a="for (var i = "+i +"; i < deno.length; i++) {";
        var b="    for (var j = "+j+"; j <= V; j++) {";

        let newcodefor = this.state.code.map((item, idx) => {
            if (item.props.id === "c1") {
                return <Text id={item.props.id} text={a} x={item.props.x} y={item.props.y} fontSize={20} fill='green'/>;
            }
            else if(item.props.id === "c2")
            {
                return <Text id={item.props.id} text={b} x={item.props.x} y={item.props.y} fontSize={20} fill='green'/>;
            }
            else
            return item;

        })
        // this.setState({
        //     code:newcode
        // })

        
        if (this.state.flag) {
            this.completed();
            return;
        }
        if (i === 0 || j === 0) {
            dp[i][j] = j;
            var index1 = i + " " + j;
            var rx, ry
            let newbox = this.state.denominationanimate.map((item, idx) => {
                if (item.props.id === index1) {
                    rx = item.props.x;
                    ry = item.props.y;

                }
                return item


            })


            var ii = 1
            newbox.push(<Text id={ii} text={dp[i][j]} x={rx + 25} y={ry + 25} fontSize={20} />);

            let newcode = newcodefor.map((item, idx) => {
                if (item.props.id === "c4") {
                   
                    return <Text id="c4" text="           dp[i][j] = j;" x={item.props.x} y={item.props.y} fontSize={20} fill='red'/>;
                }
                else
                return <Text id={item.props.id} text={item.props.text} x={item.props.x} y={item.props.y} fontSize={20} fill='green'/>;


            })
            this.setState({
                denominationanimate: newbox,
                code:newcode
            })


        }
        else {
            if ((j - parseInt(this.state.deno[i])) < 0) {
                dp[i][j] = dp[i - 1][j];
                index1 = i + " " + j;
                var index2 = (i - 1) + " " + (j);
                //var rx, ry;
                let newbox = this.state.denominationanimate.map((item, idx) => {
                    if (item.props.id === index2) {

                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="MediumSeaGreen" stroke="black" strokeWidth={4} />;
                    }
                    else if (item.props.id === index1) {
                        rx = item.props.x;
                        ry = item.props.y;
                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="rgb(0, 153, 255)" stroke="black" strokeWidth={4} />;
                    }
                    else if (item.props.id !== 1)
                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="orange" stroke="black" strokeWidth={4} />;

                    else
                        return item;

                })
                ii = 1
                newbox.push(<Text id={ii} text={dp[i][j]} x={rx + 25} y={ry + 25} fontSize={20} />);

                let newcode = newcodefor.map((item, idx) => {
                    if (item.props.id === "c6") {
                       
                        return <Text id="c6" text="           dp[i][j] = dp[i - 1][j];" x={item.props.x} y={item.props.y} fontSize={20} fill='red'/>;
                    }
                    else
                    return <Text id={item.props.id} text={item.props.text} x={item.props.x} y={item.props.y} fontSize={20} fill='green'/>;
    
    
                })
                this.setState({
                    denominationanimate: newbox,
                    code:newcode
                })


            }
            else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - parseInt(this.state.deno[i])] + 1);

                index1 = i + " " + j;
                index2 = (i - 1) + " " + j;
                var index3 = i + " " + (j - parseInt(this.state.deno[i]));
                //var rx, ry;
                let newbox = this.state.denominationanimate.map((item, idx) => {
                    if (item.props.id === index2) {

                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="MediumSeaGreen" stroke="black" strokeWidth={4} />;
                    }
                    else if (item.props.id === index1) {
                        rx = item.props.x;
                        ry = item.props.y;
                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="rgb(0, 153, 255)" stroke="black" strokeWidth={4} />;
                    }
                    else if (item.props.id === index3) {
                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="MediumSeaGreen" stroke="black" strokeWidth={4} />;
                    }

                    else if (item.props.id !== 1)
                        return <Rect id={item.props.id} x={item.props.x} y={item.props.y} width={50} height={50} fill="orange" stroke="black" strokeWidth={4} />;

                    else
                        return item;
                })
                ii = 1
                newbox.push(<Text id={ii} text={dp[i][j]} x={rx + 25} y={ry + 25} fontSize={20} />);

                let newcode = newcodefor.map((item, idx) => {
                    if (item.props.id === "c8") {
                       
                        return <Text id="c8" text="           dp[i][j] = min(dp[i - 1][j], dp[i][j -deno[i]] + 1);" x={item.props.x} y={item.props.y} fontSize={20} fill='red'/>;
                    }
                    else
                    return <Text id={item.props.id} text={item.props.text} x={item.props.x} y={item.props.y} fontSize={20} fill='green'/>;
                    
    
    
                })

                this.setState({
                    denominationanimate: newbox,
                    code:newcode
                })

            }
        }



        var flag;
        
        if (j === this.state.V) {

            i = i + 1;
            j = -1;
            if(i===this.state.deno.length)
            {
                flag=true;
                this.setState({
                    result: dp[i - 1][this.state.V],
    
                })
            }

        }




        this.setState({
            j: j + 1,
            i: i,
            dp: dp,
            flag:flag,
           


        })


    }

    completed() {
        // this.setState({ message: "Minimum coins"+this.state.dp[this.state.i-1][this.state.V] })
        this.setState({ message: "Minimum coins: " + this.state.result })
    }
    play() {
            this.algo()

        setTimeout(() => {
            if (this.state.i <= this.state.deno.length)
                this.play();
        }, 200);

    }




    render() {

        return (
            <div style={{ width: "100%" }} >
                <button onClick={() => this.start(this.props.denomination, this.props.amount)}>start</button>
                <button onClick={() => this.algo()}>step</button>

                <button onClick={() => this.play()}>play</button>

                <br /><br /> <br />

                <div style={{ marginLeft: "10%" }} >
                    

                    <Stage width={1600} height={400}>
                        <Layer id="layer">
                            {this.state.denominationanimate}
                            {this.state.code}
                        </Layer>
                    </Stage>
                    <h3>{this.state.message}</h3>
                </div>




            </div>

        );
    }
}


export default CoinChangeDp;