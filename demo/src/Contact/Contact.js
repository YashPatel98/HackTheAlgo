import React from 'react';

import './contact.css';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event) {

        let query = `&entry.1238625935=${event.target.name.value}&entry.941955885=${event.target.email.value}&entry.1797898034=${event.target.message.value}`;
        let url = `https://docs.google.com/forms/d/1VuGYBKFjIxt5Nn1qsYQd_cWf5d9yc2EEwN01kkjV4AQ/formResponse?${query}`;

        fetch(url, {
            mode: "no-cors"
        }).then((res) => {

        });
        alert("Successfully sent data");



    }

    render() {
        return (

            <div style={{ height: "670px" }}>

                <br />  <br />  <br />
                <h1 style={{ padding: 30 }}>Contact Us</h1>
                <br />
                <div style={{ borderStyle: "inset", width: "40%", backgroundColor: "darkgrey", marginLeft: "600px", padding: "40px" }}>
                    <form name="form" id="form" ref={form => this.form = form} enctype="text/plain" target="hidden_iframe" onSubmit={this.onSubmit}>
                        <div class="row" style={{ marginLeft:"60px" }} >
                            <div class="column">
                            <b>Name:</b>&nbsp; &nbsp; &nbsp; &nbsp;<input type="text" id="entry.1238625935" name="name" size="50" required/><br /><br />
                            <b>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> <input type="text" id="entry.941955885" name="email" size="50" required/><br /><br />
                            <b>Message:</b> &nbsp;&nbsp;&nbsp;<textarea id="entry.1797898034" name="message" rows="4" cols="53"required/><br /><br /><br /><br /><br /><br />
                            </div>
                            <br />
                            <br />

                        </div>
                        <div className="button1"><input type="submit" value="Send"  /></div>

                    </form>

                </div>
                <iframe title="iframe" name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} onload=""></iframe>


            </div>

        );

    }
}
export default Contact;