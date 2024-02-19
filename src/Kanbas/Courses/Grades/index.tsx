import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaCaretDown, FaFileImport, FaFileExport , FaCog } from "react-icons/fa";
import { LiaFileImportSolid, LiaFileExportSolid  } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import { PiFunnelLight } from "react-icons/pi";
import "./index.css";
function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    console.log(JSON.stringify(as));
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    console.log(JSON.stringify(es));
    return (
        <div className="d-flex flex-column flex-grow-1" style={{marginLeft: "30px", marginRight: "30px"}}>
            <div className="d-flex flex-row">
                <div className="d-flex flex-row flex-grow-1 justify-content-between">
                    <span className="d-flex flex-row" style={{color: "#b04d49"}}>
                        Gradebook
                        <FaCaretDown/>
                    </span>
                    <span style={{marginBottom: "10px"}}>
                        <button className="button" type="button">
                            <LiaFileImportSolid/>
                            Import
                        </button>
                        <button className="button" type="button">
                            <LiaFileExportSolid/>
                            Export
                            <FaCaretDown/>
                        </button>
                        <button className="button" type="button">
                            <FaCog/>
                        </button>
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="student_name" className="form-label" style={{fontWeight: "bold"}}>Student Names</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><CiSearch/></span>
                        <input type="text" className="form-control" id="student_name" placeholder="Search Students"/>
                        <span className="input-group-text"><RxCaretDown/></span>
                    </div>
                </div>
                <div className="col">
                    <label htmlFor="assignment_name" className="form-label" style={{fontWeight: "bold"}}>Assignment Names</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><CiSearch/></span>
                        <input type="text" className="form-control" id="assignment_name" placeholder="Search Students"/>
                        <span className="input-group-text"><RxCaretDown/></span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row" style={{marginBottom: "10px"}}>
                <button className="button">
                    <PiFunnelLight/>
                    Apply Filters
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead className="table-light">
                        <tr className="align-middle">
                            <th>Student Name</th>
                            {as.map((assignment) => (<th>{assignment.title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr >
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === user?._id && grade.assignment === assignment._id && enrollment.course === assignment.course);
                                        console.log(JSON.stringify(grade));
                                        return (<td>{grade?.grade || "heh"}</td>);})}
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades;

