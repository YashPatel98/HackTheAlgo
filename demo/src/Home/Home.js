import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { useDencrypt } from "use-dencrypt-effect";
import TextLoop from "react-text-loop";
import cxs from "cxs/component";
import history from './../History';
import gb from './goodbye_books.gif';
import "./Home.css";

const values = ["HackTheAlgo"];
const Fonts = cxs("div")({
  fontSize: "24px"
});

/*const Title = cxs("div")({
  marginBottom: "5px",
  fontSize: "10px",
  fontWeight: 600,
  textTransform: "uppercase",
  color: "#aaa"
});*/

const Section = cxs("div")({
  marginBottom: "50px",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
});

const Base = () => (
  <Section>
    <Fonts>
      A place where you can{" "}
      <TextLoop>
        <span>LEARN</span>
        <span>WATCH</span>
        <span>UNDERSTAND</span>
      </TextLoop>{" "}
      the algorithms.
    </Fonts>
  </Section>
);

const Heading = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 100);

    return () => clearInterval(action);
  }, []);

  return <h1>{result}</h1>;
};

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <Heading/>
          <h3>Welcome To HackTheAlgo!!. See Your Algorithms in action.</h3>
          <Base/>
          <img src={gb} alt="loading.."></img>
          <h3>Say goodbye to boring books and notes. Explore a new way of learning!</h3>
          <br/>
          <br/>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Algorithms')}>Click button to view Algorithms</Button>
          </form>
        </div>
      </div>
    );
  }
}
