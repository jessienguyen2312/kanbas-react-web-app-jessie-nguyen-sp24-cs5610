import {Link, useLocation, useParams} from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaChalkboard, FaArrowCircleRight, FaQuestionCircle, FaBars } from "react-icons/fa";
import { Offcanvas } from "react-bootstrap";
import {useState} from "react";
import db from "../Database";


function KanbasNavigation() {
    const [courses, setCourses] = useState(db.courses);
    const links = [
        { label: " ", icon: <img src={`/images/NEU_Kanbas_logo.png`} alt="neu logo"/> },
        { label: "Account", icon: <FaRegUserCircle className="fs-2 wd-user"/> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2"/> },
        { label: "Courses", icon: <FaBook className="fs-2"/> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2"/> },
        { label: "Inbox", icon: <FaInbox className="fs-2"/>},
        { label: "History", icon: <FaRegClock className="fs-2"/>},
        { label: "Studio", icon: <FaChalkboard className="fs-2"/>},
        { label: "Commons", icon: <FaArrowCircleRight className="fs-2"/>},
        { label: "Help", icon: <FaQuestionCircle className="fs-2"/>}
    ];
    const { pathname } = useLocation();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ul className="wd-kanbas-navigation d-none d-md-block">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                        <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                    </li>
                ))}
            </ul>
            {/*implement top nav bar using react-bootstrap library https://react-bootstrap.netlify.app/docs/components/offcanvas/*/}
            <div className="d-md-none top-nav-bar-medium-screen">
                <button type="button" onClick={handleShow}>
                    <FaBars/>
                </button>
                <Offcanvas show={show} onHide={handleClose} style={{zIndex: 9999, width: "100%"}}>
                    <Offcanvas.Header closeButton>
                        <h1 style={{fontWeight: "bold", color: "#e02d27"}}>CANVAS</h1>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="list-group">
                            {links.slice(1).map((link, index) => (
                                <li key={index} className="list-group-item">
                                    <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                                </li>
                            ))}
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>

    );
}
export default KanbasNavigation;