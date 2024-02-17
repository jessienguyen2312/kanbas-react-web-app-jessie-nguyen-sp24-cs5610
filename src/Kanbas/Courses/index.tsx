import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";

function Courses() {
    return (
        <div style={{marginLeft: "90px", marginTop: "10px"}}>
            <Breadcrumb/>

            <CourseNavigation />
            <div>
                <div
                    className="container overflow-y-scroll"
                     >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<h1>Home</h1>}/>
                        <Route path="Modules" element={<h1>Modules</h1>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
export default Courses;