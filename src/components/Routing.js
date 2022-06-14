import React, { Component } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import YourNotes from './YourNotes';
import CreateNew from './CreateNew';

class Routing extends Component {
    static getDerivedStateFromProps(props,state) {
        if(!localStorage.getItem('notes-list')) localStorage.setItem('notes-list',JSON.stringify([]));
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/yournotes" element={<YourNotes/>}/>
                    <Route path="/createnew" element={<CreateNew/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
};

export default Routing;