import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../Styles/nav.css";

class nav extends Component {
  render() {
    return (
      <div class="test">
        <Button variant="primary" active={false}>
          About Me
        </Button>{" "}
        <Button variant="primary">Experience</Button>{" "}
        <Button variant="primary">Side Tings</Button>{" "}
      </div>
    );
  }
}

export default nav;
