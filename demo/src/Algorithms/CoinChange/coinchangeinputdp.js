import React from 'react';
import CoinChangeDp from './coinchangedp';
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
                <div style={{ height: "700px" }}>
                    
                Denominations<input type="text" ref={denomination => { d = denomination; }} />
                amount<input type="text" ref={amount => { a = amount; }} />
                    <button onClick={() => { this.coinchangeinput(d.value, a.value); d.value = ''; a.value = ''; }}>
                        Submit
                </button>
                <CoinChangeDp amount={this.state.amount} denomination = {this.state.denomination}></CoinChangeDp>
                  
                </div>

            </div>
        );
    }
}


export default CoinChangeInputDp;

