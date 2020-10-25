import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import Tech from "../Sections/tech";
import Home from "../Sections/home";

const Root = ({ store }) => <Provider store={store}></Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
