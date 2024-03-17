import React, {useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
// import { assignments } from "../../../Database";
import {FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlusCircle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {KanbasState} from "../../../store";
import {
    addAssignment,
    resetAssignment,
    setAssignment,
    updateAssignment
} from "../assignmentsReducer";
function AssignmentEditor() {
    const { assignmentId } = useParams();
    const { courseId } = useParams();
    const navigate = useNavigate();
    // console.log(assignmentId)

    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    console.log(JSON.stringify(assignment))

    // extract all the fields:

    const newA =  {
            _id: "0",
            title: "New Assignment",
            course: courseId,
            description: "New Description",
            points: 100,
            due: new Date().toISOString().slice(0, 16),
            available: new Date().toISOString().slice(0, 16),
            until: new Date().toISOString().slice(0, 16)
    }

    // const object = assignmentId === "NewAssignment" ? newA : assignment.assignment;

    const handleSave = () => {
        if (assignmentId !== "NewAssignment") {
            dispatch(updateAssignment(assignment));
            dispatch(resetAssignment(assignment));
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);

        } else {
            dispatch(addAssignment({...assignment, course: courseId}))
            dispatch(resetAssignment(assignment));
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        }
    };
    const handleCancel = () => {
        dispatch(resetAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    }
    return (
        <div className="d-flex flex-column flex-grow-1" style={{marginLeft: "30px", marginRight: "30px"}}>
            <div className="d-flex flex-row justify-content-end align-items-center">
                <FaCheckCircle style={{color: "#3c8250", marginLeft: "5px", marginRight: "5px"}}/>
                <span style={{color: "#3c8250", fontWeight: "bold", marginLeft: "5px", marginRight: "5px"}}>Published</span>
                <button className="button">
                    <FaEllipsisV style={{color: "#82888f"}}/>
                </button>
            </div>
            <hr/>
            <div>
                <span className="p-3">Assignment Name</span>
                <input value={assignment?.title} className="form-control mb-2" type="text"
                       onChange={(e) => dispatch(setAssignment({...assignment, title: e.target.value}))}/>
                <textarea value={assignment?.description} className="form-control mb-2"
                    onChange={(e) => dispatch(setAssignment({...assignment, description: e.target.value}))}/>
                <div>
                    <div className="row mb-3">
                        <span className="col-3 align-items-end">Points</span>
                        <div className="col-9">
                            <input value={assignment?.points} className="form-control"
                                   onChange={(e) => dispatch(setAssignment({...assignment, points: e.target.value}))}/>
                        </div>
                    </div>
                    <div className="row">
                        <span className="col-3">Assign</span>
                        <div className="col-9 border rounded p-3" style={{borderColor: "#82888f"}}>
                            <label className="col-12 form-label">Due</label>
                            <input className="col-12 mb-3" type="datetime-local" value={assignment?.due}
                            onChange={(e) => dispatch(setAssignment({...assignment, due: e.target.value}))}
                            />

                            <label className="col-6 form-label">Available From</label>
                            <label className="col-6 form-label">Until</label>

                            <input className="col-6 mb-3" type="datetime-local" value={assignment?.available}
                                   onChange={(e) => dispatch(setAssignment({...assignment, available: e.target.value}))}
                            />
                            <input className="col-6 mb-3" type="datetime-local" value={assignment?.until}
                                   onChange={(e) => dispatch(setAssignment({...assignment, until: e.target.value}))}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="d-flex flex-row justify-content-end">
                <button onClick={handleCancel} className="button">
                    Cancel
                </button>
                <button onClick={handleSave} className="button" style={{backgroundColor: "#c33232", color: "white"}}>
                    Save
                </button>
            </div>

        </div>
    );
}
export default AssignmentEditor;