import React, { Component } from "react";

class Preview extends Component {
  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        <span>{this.props.date}</span>
        <p>{this.props.desc}</p>
      </article>
    );
  }
}

export default Preview