import React, { Component } from "react";
import Preview from "./Preview";

class PreviewList extends Component {
  componentDidMount() {
    this.props.loadArticals();
  }
  render() {
    const { loading, error, articlelist } = this.props;
    if (error) {
      return <p> something error!!!</p>;
    }
    if (loading) {
      return <p> loading... </p>;
    }
    return (
      <div>
        {articlelist.map((item, index) => <Preview {...item} key={index} />)}
      </div>
    );
  }
}

export default PreviewList;
