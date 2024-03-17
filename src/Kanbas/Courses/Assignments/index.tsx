import React, {useState} from "react";
import {FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlusCircle} from "react-icons/fa";
import { RiFileEditLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {MdDragIndicator} from "react-icons/md";
import {FiPlus} from "react-icons/fi";
import {HiEllipsisVertical} from "react-icons/hi2";
import "./index.css";
import {CSSProperties} from "react";
import {useDispatch, useSelector} from "react-redux";
import {KanbasState} from "../../store";
import {setAssignment} from "./assignmentsReducer";
import JsonStringify from "../../../Labs/a3/JavaScript/json/JsonStringify";
function Assignments() {
    const assignments = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    const dispatch = useDispatch();

    // const [assignments, setAssignment] = useState(db.assignments)
    const { courseId } = useParams();
    const assignmentList = assignments.filter((assignment) => assignment.course === courseId);

    console.log(JSON.stringify(assignmentList))

    const buttonStyle: CSSProperties = {
        marginLeft: "0px",
        marginRight: "5px"
    }
    return (
        <div className="d-flex flex-column flex-grow-1" style={{marginLeft: "10px", marginRight: "30px"}}>
            <div className="d-flex flex-row flex-wrap justify-content-between">
                <div>
                    <label htmlFor="assignmentSearch">
                        <input className="form-control wd-25" type="text"
                               placeholder="Search for Assignment" id="assignmentSearch"/>
                    </label>
                </div>

                <div>
                    <button className="button">
                        <FiPlus style={buttonStyle}/>
                        Group
                    </button>

                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/NewAssignment`}  style={{fontWeight: "bold", color: "#2d3741"}}>
                        <button className="button" style={{backgroundColor: "#c33232", color: "white"}}>
                            <FiPlus style={{color: "white"}}/>
                            Assignment
                        </button>
                    </Link>

                    <button className="button">
                        <FaEllipsisV style={{color: "82888f"}}/>
                    </button>
                </div>
            </div>
            <hr/>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div className="d-flex flex-sm-wrap justify-content-between" style={{paddingTop: "20px", paddingBottom: "20px"}}>
                        <span>
                          <MdDragIndicator className="me-2" />
                            <FaCaretDown style={{marginRight: "5px"}}/>
                            ASSIGNMENTS
                        </span>

                        <span className="float-end">
                                <span className="rounded-pill">40% of Total</span>
                                <FiPlus className="ms-2" />
                                <HiEllipsisVertical className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item d-flex flex-nowrap" style={{paddingTop: "10px", paddingBottom: "10px"}}>
                                <MdDragIndicator className="me-2" />
                                <RiFileEditLine style={{marginRight: "18px", fontSize: "1.2em", color: "#73a682"}}/>
                                <div className="flex-grow-1 assignment-content">
                                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}  style={{fontWeight: "bold", color: "#2d3741"}}
                                        onClick={() => dispatch(setAssignment(assignment))}>
                                        {assignment.title}
                                    </Link>
                                    <br/>
                                    <small><span  style={{fontWeight: "normal", color: "#b04c47"}}>{assignment.description}</span>{" | "}<b>Due </b>{assignment.due}{" | "}{assignment.points}{" pts"}</small>
                                </div>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                </span>
                                <span className="float-end">
                                    <HiEllipsisVertical className="ms-2" />
                                </span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </div>
    );}
export default Assignments;