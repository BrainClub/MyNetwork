import React, { Component } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter} from "react-router-dom";
// import NavLink from "react-router-dom/es/NavLink";

const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
             <Header />
             <Navbar />



                <div className="app-wrapper__content">
                    <Route path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData} />} />
                    <Route path="/profile"  render={() => <Profile posts ={props.posts} />} />
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
