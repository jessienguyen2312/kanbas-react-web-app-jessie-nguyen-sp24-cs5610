import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown, FaRegCheckCircle } from "react-icons/fa";
import { HiEllipsisVertical } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import { MdDragIndicator } from "react-icons/md";
import { useParams } from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {addModule, deleteModule, updateModule, setModule} from "./modulesReducer";
import {KanbasState} from "../../store";
import {Link} from "react-router-dom";

function ModuleList() {
    const { courseId } = useParams();

    const modules = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);

    // const [modules, setModules] = useState(db.modules)
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);


    return (
        <div className="d-flex flex-column flex-grow-1" style={{marginLeft: "10px", marginRight: "30px"}}>
            <div className="d-flex flex-wrap justify-content-end">
                <button className="button">Collapse All</button>
                <button className="button">View Progress</button>
                <button className="button">
                    <FaRegCheckCircle style={{margin: "5px", color: "#51a578"}}/>
                    Publish All
                    <FaCaretDown style={{margin: "5px"}}/>
                </button>

                <Link to={`/Kanbas/Courses/${courseId}/Modules/ModuleEdit`}>
                    <button className="button" style={{backgroundColor: "#c33232", color: "white", paddingRight: "14px"}}>
                        <FiPlus style={{margin: "5px"}}/>
                        Module
                    </button>
                </Link>

                <button className="button">
                    <FaEllipsisV />
                </button>
            </div>
            <hr/>
            <ul className="list-group wd-modules">
                {modulesList.map((module) => (
                    <li
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}
                    >
                        <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                            <MdDragIndicator className="me-2" />
                            <FaCaretDown style={{marginRight: "5px"}}/>
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaCaretDown/>
                                <FiPlus className="ms-2" />
                                <HiEllipsisVertical className="ms-2" />
                            </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson: any) => (
                                    <li className="list-group-item" style={{paddingTop: "20px", paddingBottom: "20px"}}>
                                        <MdDragIndicator className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                          <FaCheckCircle className="text-success" />
                                          <HiEllipsisVertical className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>



        </div>
    );
}
export default ModuleList;




