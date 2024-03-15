import {addCourse, deleteCourse, updateCourse, setCourse} from "../../Courses/coursesReducer";
import {useSelector, useDispatch} from "react-redux";
import {KanbasState} from "../../store";
import {useLocation} from "react-router-dom";

function CourseModifier() {
    const { pathname } = useLocation();
    console.log(pathname);
    const courseList = useSelector((state: KanbasState) => state.coursesReducer.courses);
    const course = useSelector((state: KanbasState) => state.coursesReducer.course);
    const dispatch = useDispatch();

    return (
        <div className="container" >
            <h1>Modify Courses</h1>
            <div>
                <h3>Add a course</h3>
                <div className="form-control">

                </div>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-success" onClick={() => dispatch(addCourse({...course}))}>
                        Add
                    </button>
                    <button className="btn btn-warning" onClick={() => dispatch(updateCourse(course))}>
                        Update
                    </button>
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
                </li>
                {courseList.map((course, index) => (
                    <li key={index} className="list-group-item">
                        <button className="btn btn-danger" onClick={() => dispatch(deleteCourse(course._id))}>Delete</button>
                        <button className="btn btn-info" onClick={() => dispatch(setCourse(course))}>Edit</button>
                        <h4>{course.name}</h4>
                        <p>id: {course._id}</p>
                        <p>description: {course.description}</p>
                        <p>start date:{course.startDate}</p>
                        <p>end date:{course.endDate}</p>
                    </li>
                ))}
            </ul>

        </div>
    )

}

export default CourseModifier;