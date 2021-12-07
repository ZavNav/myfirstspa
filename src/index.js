import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import counter from "./reducer";
import Main from "./Main";
import App from "./App";
import './index.css'


ReactDom.render(
    <Main/>,
    document.getElementById("root")
)