import React, { Component } from "react";
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as listActions from './action'

class Detail extends Component {
  render() {
    return (
      <div>
      <ul>
        <li>detail</li>
      </ul>

      </div>
    );
  }
}


export default Detail

