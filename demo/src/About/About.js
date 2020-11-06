import React, { Component } from "react";
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
          <div>
            <h1>About Us</h1>
          </div>
        </div>
        <div style={{ width: "70%", marginLeft: "15%" }}>
          <p style={{ display: "flex", textAlign: "left", padding: 30, fontSize: "25px", color: "#0e76a8" }}><b>
            This app would help you to take a peek at algorithm in action.
            It helps you to understand how an algorithm works more clearly.
            Our Priority have been to provide you with an interesting and interactive graphical user-interface.
        With this grpahical user interface you can play with algorithms and understand their reactions at different speeds and steps of the algorithm.</b></p>
        </div>
        <h2>Team</h2>
       
        <div class="card" style={{ display: "inline-block" }}>
          <br /><br /><br /><br />
          <h4><b>Yash Patel H.</b></h4>
          <br /><br /><br />
          <div class="container">

            <a href="https://github.com/YashPatel98" style={{ color: "black" }}> <i class="fa fa-github" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;
           <a href="https://www.linkedin.com/in/yash-patel-7373151a0" style={{ color: "#0e76a8 " }}> <i class="fa fa-linkedin" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;
           </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="card" style={{ display: "inline-block" }}>
          <br /><br /><br /><br />
          <h4><b>Yash Patel P.</b></h4>
          <br /><br /><br />
          <div class="container">

            <a href="https://github.com/Yash4Patel" style={{ color: "black" }}> <i class="fa fa-github" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;
           <a href="https://www.linkedin.com/in/yash4patel/" style={{ color: "#0e76a8 " }}> <i class="fa fa-linkedin" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;
           </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="card" style={{ display: "inline-block" }}>
          <br /><br /><br /><br />
          <h4><b>Payal Chitroda</b></h4>
          <br /><br /><br />
          <div class="container">

            <a href="https://github.com/payalchitroda" style={{ color: "black" }}> <i class="fa fa-github" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;
           <a href="https://www.linkedin.com/in/payal-chitroda/" style={{ color: "#0e76a8 " }}> <i class="fa fa-linkedin" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;
           </div>
        </div>
      </div >
    );
  }
}

export default About;
