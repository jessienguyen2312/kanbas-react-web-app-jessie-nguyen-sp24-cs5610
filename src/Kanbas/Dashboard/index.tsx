import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
// import { courses } from "../Database";
import "../styles.css"
import "../Navigation/index.css"
import "./index.css"
import { BsPencilSquare } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { CSSProperties } from "react";
import db from "../Database";
import CourseModifier from "./CourseModifier";
import {useSelector} from "react-redux";
import {KanbasState} from "../store";


function Dashboard() {
    const ellipsisV : CSSProperties = {
        position: "absolute", right: "10px", top: "10px", color: "white"
    };

    // const [courses, setCourses] = useState(db.courses);
    const {courses} = useSelector((state: KanbasState) => state.coursesReducer);


    return (
        <div className="container wd-kanbas-dashboard">
            <div className="row">
                <div className="col-12 d-none d-sm-block">
                    <h1>Dashboard</h1>
                    <hr/>
                </div>
                <div className="col-12 ms-4 d-xs-block">
                    <h3 style={{display: "inline"}}>Published courses ({courses.length})</h3>
                    <Link to="/Kanbas/Courses">
                        <button className="button" style={{backgroundColor: "#c33232", color: "white"}}>Modify courses (Add/Edit/Delete)</button>
                    </Link>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="row row-cols-5 row-cols-xs-2 d-xs-block g-4">
                    {courses.map((course) => (
                        <div key={course._id} style={{ width: 300 }}>

                            <div className="card">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <FaEllipsisV style={ellipsisV}/>
                                    <img src={`/images/${course.image}`} className="card-img-top" alt={course.image}/>
                                </Link>

                                <div className="card-body">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                                        <h5 className="card-title" style={{color: course.color}}>{course._id}{" "}{course.code}{" "}{course.name}{" "}{course.label}</h5>
                                        <p className="card-text">{course._id}{"."}{course.code}{"."}{course.number}</p>
                                        <p className="card-text">{course.description}</p>
                                    </Link>
                                    <Link to={`/Kanbas/Courses/${course._id}/Assignments`}><BsPencilSquare style={{color: "grey"}}/></Link>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
export default Dashboard;


