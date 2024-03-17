import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaBars,
    FaChevronDown,
    FaFolder,
    FaHome,
    FaNetworkWired,
    FaPlug,
    FaRegEdit,
    FaRocket,
    FaBullseye, FaRegCircle, FaCog
} from "react-icons/fa";
import { LuBookOpenCheck, LuNewspaper } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { GoDiscussionClosed } from "react-icons/go";
import { IoMegaphoneOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { SlNotebook } from "react-icons/sl";
import {Collapse} from "react-bootstrap";
import { useState } from 'react';
function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom-Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto-Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const icons = [<FaHome/>, <FaNetworkWired/>, <FaPlug/>, <FaPlug/>, <FaRegEdit/>,
        <FaRocket/>, <LuBookOpenCheck />, <IoPeopleOutline/>, <FaPlug/>, <GoDiscussionClosed />,
        <IoMegaphoneOutline/>, <LuNewspaper/>, <FaFolder/>, <GoChecklist/>, <FaBullseye/>,
        <FaRegCircle/>, <SlNotebook/>, <FaPlug/>, <FaCog/>
    ];

    const menu = [
        {label: "Home", icon: <FaHome />},
        {label: "Modules", icon: <FaNetworkWired />},
        {label: "Piazza", icon: <FaPlug />},
        {label: "Zoom-Meetings", icon: <FaPlug />},
        {label: "Assignments", icon: <FaRegEdit />},
        {label: "Quizzes", icon: <FaRocket />},
        {label: "Grades", icon: <LuBookOpenCheck />},
        {label: "People", icon: <IoPeopleOutline />},
        {label: "Panopto-Video", icon: <FaPlug />},
        {label: "Discussions", icon: <GoDiscussionClosed />},
        {label: "Announcements", icon: <IoMegaphoneOutline />},
        {label: "Pages", icon: <LuNewspaper />},
        {label: "Files", icon: <FaFolder />},
        {label: "Rubrics", icon: <GoChecklist />},
        {label: "Outcomes", icon: <FaBullseye />},
        {label: "Collaborations", icon: <FaRegCircle />},
        {label: "Syllabus", icon: <SlNotebook />},
        {label: "Settings", icon: <FaCog />}
    ];



    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    return (
        <>
            <ul className="wd-navigation d-none d-md-block">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                        <Link to={link}>{link.replace("-", " ")}</Link>
                    </li>
                ))}
            </ul>
            {/*implement course nav bar using react-bootstrap library https://react-bootstrap.netlify.app/docs/utilities/transitions*/}
            <div className="d-md-none course-nav">
                <button className="course-nav-button" type="button" onClick={() => setOpen(!open)} aria-controls="course_navigation" aria-expanded={open}>
                    <FaChevronDown style={{color: "white"}}/>
                </button>
                <Collapse in={open}>
                    <div id="course_navigation">
                        <ul style={{listStyle: "none"}}>
                            {menu.map((item, index) => (
                                <li key={index}>
                                    <i style={{color: "#a63530", marginRight: "5px"}}>{item.icon}</i>
                                    <Link to={item.label}>{item.label.replace("-", " ")}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </Collapse>
            </div>
        </>

    );
}
export default CourseNavigation;

