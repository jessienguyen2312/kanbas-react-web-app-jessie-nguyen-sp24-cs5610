import {Routes, Route, Link, Navigate} from 'react-router-dom';
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";

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
                    <Route path="Courses/*" element={<h1>Courses</h1>} />
                </Routes>
            </>
        </>
    );}
export default Kanbas;