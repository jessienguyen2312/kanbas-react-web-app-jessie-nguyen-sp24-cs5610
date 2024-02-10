import { Link, useLocation } from "react-router-dom";
import "./index.css";
import neuLogo from "../../Images/NEU_Kanbas_logo.png"
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaChalkboard, FaArrowCircleRight, FaQuestionCircle} from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: " ", icon: <img src={neuLogo} alt="neu logo"/> },
        { label: "Account", icon: <FaRegUserCircle className="fs-2 wd-user" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2" />},
        { label: "History", icon: <FaRegClock className="fs-2" />},
        { label: "Studio", icon: <FaChalkboard className="fs-2" />},
        { label: "Commons", icon: <FaArrowCircleRight className="fs-2" />},
        { label: "Help", icon: <FaQuestionCircle className="fs-2" />}
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;