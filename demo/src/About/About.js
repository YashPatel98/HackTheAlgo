import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
          <div>
            <h2>About Page</h2>
          </div>
        </div>
        <p style={{ display: "flex", textAlign: "left", padding: 30 }}>
        This app would help you to take a peek at algorithm in action.
        It helps you to understand how an algorithm works more clearly.
        Our Priority have been to provide you with an interesting and interactive graphical user-interface.
        With this grpahical user interface you can play with algorithms and understand their reactions at different speeds and steps of the algorithm.</p>
        <p style={{ display: "flex", textAlign: "left", padding: 30 }}>
            <b>Creators:</b>
            <p><br/>Payal Chitroda K.<br/>Yash Patel H.<br/>Yash Patel P.<br/></p>
        </p>
      </div>
    );
  }
}

export default About;
