import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PreviewList from "../../components/Home/PreviewList";

import * as listActions from "./action";

@connect(
  state => {
    return {
      list: state.list
    };
  },
  dispatch => {
    return {
      listActions: bindActionCreators(listActions, dispatch)
    };
  }
)
class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>home</li>
        </ul>
        <PreviewList {...this.props.list} {...this.props.listActions} />
      </div>
    );
  }
}

export default Home;

// export default connect(state => {
//   return {
//     list:state.list
//   }
// },dispatch => {
//   return {
//     listActions:bindActionCreators(listActions,dispatch)
//   }
// })(Home)
