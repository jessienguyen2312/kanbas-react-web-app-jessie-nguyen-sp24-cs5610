import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "../styles.css"
import "../Navigation/index.css"
import "./index.css"
import { BsPencilSquare } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { CSSProperties } from "react";
import {IconContext} from "react-icons";
function Dashboard() {
    const ellipsisV : CSSProperties = {
        position: "absolute", right: "10px", top: "10px", color: "white"
    };
    return (
        <div className="container wd-kanbas-dashboard">
            <div className="row">
                <div className="col-12 d-none d-sm-block">
                    <h1>Dashboard</h1>
                    <hr/>
                </div>
                <div className="col-12 ms-4 d-xs-block">
                    <h3>Published courses (8)</h3>
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
                                    <img src={`/images/${course.image}`} className="card-img-top"/>
                                </Link>

                                <div className="card-body">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                                        <h5 className="card-title" style={{color: course.color}}> {course.name}</h5>
                                        <p className="card-text">{course.number}</p>
                                        <p className="card-text">{course.startDate}</p>
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


