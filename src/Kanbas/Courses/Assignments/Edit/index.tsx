import React, {useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
// import { assignments } from "../../../Database";
import {FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlusCircle} from "react-icons/fa";
function AssignmentEditor() {
    const [assignments, setAssignment] = useState(db.assignments)

    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    const handleCancel = () => {
        console.log("Cancelling assignment TBD in later assignments");
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
                <div style={{marginBottom: "10px"}}>Assignment Name</div>
                <input value={assignment?.title} className="form-control mb-2" />
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