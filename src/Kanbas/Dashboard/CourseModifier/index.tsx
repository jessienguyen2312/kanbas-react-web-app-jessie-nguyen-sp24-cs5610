import {addCourse, deleteCourse, updateCourse, setCourse} from "../../Courses/coursesReducer";
import {useSelector, useDispatch} from "react-redux";
import {KanbasState} from "../../store";
import {Link, useLocation} from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";

function CourseModifier() {
    const { pathname } = useLocation();
    console.log(pathname);
    const courseList = useSelector((state: KanbasState) => state.coursesReducer.courses);
    const course = useSelector((state: KanbasState) => state.coursesReducer.course);
    const dispatch = useDispatch();

    return (
        <div className="container" >
            <h1>Modify Courses</h1>
            <div className="flex flex-row">
                <div className="mb-3">
                    <label className="form-label">Course Name</label>
                    <input className="form-control" type="text" value={course.name} onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Course Description</label>
                    <input className="form-control" type="text" value={course.description} onChange={(e) => dispatch(setCourse({ ...course, description: e.target.value }))}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Start Date</label>
                    <input className="form-control" type="date" value={course.startDate} onChange={(e) => dispatch(setCourse({ ...course, startDate: e.target.value }))}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">End Date</label>
                    <input className="form-control" type="date" value={course.endDate} onChange={(e) => dispatch(setCourse({ ...course, endDate: e.target.value }))}/>
                </div>
                <button className="button float-end" onClick={() => dispatch(addCourse({...course}))} style={{backgroundColor: "#3c8250", color: "white"}}>
                    <FaPlus style={{marginBottom: "3px", marginTop: 0}}/>
                    Add
                </button>
                <button className="button" onClick={() => dispatch(updateCourse(course))}>
                    <RxUpdate style={{marginBottom: "3px", marginTop: 0}}/>
                    Update
                </button>
            </div>
            <hr/>
            <h1>Published Courses ({courseList.length})</h1>
            <ul className="list-group">
                {courseList.map((course, index) => (
                    <li key={index} className="list-group-item">
                        <button className="button float-end" style={{backgroundColor: "#c33232", color: "white"}}  onClick={() => dispatch(deleteCourse(course._id))}>
                            <IoTrashOutline style={{marginBottom: "3px", marginTop: 0}}/>
                            Delete
                        </button>

                        <Link to={`/Kanbas/Courses/${course._id}/Home`} style={{fontSize: "1.5em"}}>
                            {course.name}
                        </Link>

                        <button className="button" onClick={() => dispatch(setCourse(course))} style={{marginTop: 0}}>
                            <FaEdit style={{marginBottom: "3px", marginTop: 0}}/>
                            Edit
                        </button>

                        <p><b>id: </b> {course._id}</p>
                        <p><b>Description: </b> {course.description}</p>
                        <p><b>Start date: </b> {course.startDate}</p>
                        <p><b>End date: </b>{course.endDate}</p>
                    </li>
                ))}
            </ul>

        </div>
    )

}

export default CourseModifier;