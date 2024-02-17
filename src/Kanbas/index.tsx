import {Routes, Route, Link, Navigate} from 'react-router-dom';
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
        <>
            {/*<div>*/}
            {/*    <KanbasNavigation/>*/}
            {/*</div>*/}

            <>
                <KanbasNavigation/>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>
            </>
        </>
    );}
export default Kanbas;