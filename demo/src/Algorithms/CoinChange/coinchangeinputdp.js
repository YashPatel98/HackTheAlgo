import React from 'react';
import CoinChangeDp from './coinchangedp';
import ReactTooltip from 'react-tooltip'
//import NavTabs from './../../Components/CoinchangeTab/CoinchangeTab';
class CoinChangeInputDp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            denomination: {},
            amount: {}
        };
    }

    coinchangeinput(denominations, amount) {
        var a = parseInt(amount);
        var d = [];
        var res = denominations.split(",");
        res.sort(function (a, b) { return (a - b) });

        for (var i = 0; i < (res.length); i++) {
          //  d.push(denominations.charAt(i));
            d.push(res[i]);
        }
        this.setState({ denomination: d, amount: a });
    }
    //backgroundColor: "LightGray",
    //<h1>Coin Change Problem</h1>
    render() {
        let d;
        let a;
        return (
            <div>
                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
                <div style={{ height: "700px" }}>
                <p style={{ fontSize: "20px"}}> <b>The coin change problem is finding the minimum number of coins from certain denominations that add up to a given amount of money
              </b> </p> 
                Denominations<input type="text" ref={denomination => { d = denomination; }} /> &nbsp;
                Amount<input type="text" ref={amount => { a = amount; }} /> &nbsp;
                    <button onClick={() => { this.coinchangeinput(d.value, a.value); d.value = ''; a.value = ''; }}>
                        Submit
                </button>
                <i class="fa fa-lightbulb-o" style={{ fontSize: "50px", marginLeft: "5%" }} data-tip="INPUT FORMAT <br /> Denomination-1,2,5<br />amount-7<br/> Use comma to separate denomination." ></i><br />
                    <h3 style={{ fontSize: "20px", marginLeft: "750px" }}>HELP</h3>

                    <ReactTooltip multiline={true} />
                <CoinChangeDp amount={this.state.amount} denomination = {this.state.denomination}></CoinChangeDp>
                  
                </div>

            </div>
        );
    }
}


export default CoinChangeInputDp;

