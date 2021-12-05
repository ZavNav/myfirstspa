import React, { Component } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Sample SPA-Text</h1>
                    <ul className={"header"}>
                        <li><NavLink to={"/"}>Main</NavLink></li>
                        <li><NavLink to={"/stuff"}>Stuff</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>
                    <div className={"content"}>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/stuff" element={<Stuff/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;