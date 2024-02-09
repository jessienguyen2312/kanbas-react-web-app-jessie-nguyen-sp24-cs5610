import React from 'react';
import logo from './logo.svg';
import Labs from './Labs';
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/Labs"/>}/>
                    <Route path="/Labs/*" element={<Labs/>}/>
                    <Route path="/Kanbas/*" element={<Kanbas/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}


export default App;
