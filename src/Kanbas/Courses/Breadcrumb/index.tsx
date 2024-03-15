// import { courses } from "../../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCaretRight } from "react-icons/rx";
import {CSSProperties, useState} from "react";
import db from "../../Database";
import {useSelector} from "react-redux";
import {KanbasState} from "../../store";
// import { useMatches } from "react-router-dom";

// https://www.educative.io/answers/what-are-breadcrumbs-in-react-router <--- loosely based on this tutorial
// https://reactrouter.com/en/main/hooks/use-matches <-- what I want to implement in the future


/*
* I made a custom breadcrumb using string manipulation. The path after course id
* is parsed into an array. For each element in the array, a link path is
* generated relatively to the current path except for the last element array
* which the link will be disabled, and colored black to denote current page
* */
function Breadcrumb () {
    const {courses} = useSelector((state: KanbasState) => state.coursesReducer);
    // const [courses, setCourses] = useState(db.courses);

    // Stylings
    const courseNavToggle : CSSProperties = {
        border: "none", backgroundColor: "white", color: "#a9514e", fontSize: "30px",
        marginRight: "20px"
    };
    const courseNavCurrent: CSSProperties = {
        textDecoration: "none", color: "#2d3b45", fontSize: "1.2em"
    };
    const courseNavLink: CSSProperties = {
        textDecoration: "none", color: "#a9514e", fontSize: "1.2em"
    }
    // Course name & id parameters
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    // path names
    const { pathname } = useLocation();
    // extract the current location within a course

    // split pathname by forward slash
    const currentLocation = pathname.split("/");
    // grab the location of current course name
    // @ts-ignore
    const courseName = currentLocation.indexOf(course?._id);
    // get all elements after the course name to generate breadcrumbs
    const trail = currentLocation.slice(courseName + 1);
    // console.log(trail);

    return (
        <div className="d-none d-md-block justify-content-start">
            <button type={"button"} style={courseNavToggle}>
                <HiMiniBars3 />
            </button>
            <Link style={courseNavLink} to="Home">{course?._id}{" "}{course?.code}{" "}{course?.name}</Link>
            <span>
                {trail.map((link, index) => (
                    <Link style={index === trail.length - 1 ? courseNavCurrent : courseNavLink} to={index === trail.length - 1 ? "#" : link}>
                        <RxCaretRight style={{color: "#888888"}}/>{link.replace("-", " ")}
                    </Link>
                ))}
            </span>

            <hr/>
        </div>
    );

}
export default Breadcrumb;