import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../views/Home/index";
import Detail from "../views/Detail/index";

const BasicExample = () =>
  <Router>
    <div>
      <nav>
        <Link to="/home">home</Link>
        {"   "}
        <Link to="/detail">detail</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/detail" component={Detail} />
    </div>
  </Router>;

export default BasicExample;
