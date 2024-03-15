import {Routes, Route, Link, Navigate} from 'react-router-dom';
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import {Provider} from "react-redux";
import CourseModifier from "./Dashboard/CourseModifier";

function Kanbas() {
    return (
        <>
            <Provider store={store}>
                <KanbasNavigation/>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/" element={<CourseModifier/>}/>
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>
            </Provider>
        </>
    );}
export default Kanbas;