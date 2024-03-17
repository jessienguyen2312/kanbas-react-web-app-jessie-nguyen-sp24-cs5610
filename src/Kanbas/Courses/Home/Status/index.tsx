import { LiaFileImportSolid } from "react-icons/lia";
import { FaRegLifeRing } from "react-icons/fa6";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaArrowCircleRight, FaRegBell } from "react-icons/fa";
import { HiOutlineMegaphone } from "react-icons/hi2";
import "./index.css";
import {CSSProperties} from "react";
import {Link, useParams} from "react-router-dom";
import { tasks } from "../../../Database";
function Status () {
    const { courseId } = useParams();
    // console.log(JSON.stringify(courseId))

    const taskList = tasks.filter((task) => task.course === courseId);


    const iconStyle : CSSProperties = {
        color: "#626a73", marginLeft: "5px", marginRight: "5px"
    };
    const sideButtons = [
        {label: "Import Existing Content", icon: <LiaFileImportSolid style={iconStyle}/>},
        {label: "Import from Commons", icon: <FaArrowCircleRight style={iconStyle}/>},
        {label: "Choose Home Page", icon: <FaRegLifeRing style={iconStyle}/>},
        {label: "View Course Stream", icon: <BsBarChartLineFill style={iconStyle}/>},
        {label: "New Announcement", icon: <HiOutlineMegaphone style={iconStyle}/>},
        {label: "New Analytics", icon: <BsBarChartLineFill style={iconStyle}/>},
        {label: "View Course Notification", icon: <FaRegBell style={iconStyle}/>},
    ]
    return (
        <div className="d-flex flex-column d-none d-lg-flex" style={{marginRight: "24px"}}>
            {sideButtons.map((button, index) =>(
                <button key={index} className="button button-side-bar">
                    {button.icon}{button.label}
                </button>
            ))}
            <div className="to-do-bar">
                <h6 style={{marginTop: "20px", fontWeight: "bold", color: "#414d56"}}>To do</h6>
                <hr/>
                <ul className="list-group">
                    {taskList.map((task) => (
                        task.todo?.map((content, index) => (
                            <li key={index} className="list-group-item d-flex align-items-start">
                                <span className="badge bg-danger bg-primary rounded-circle" style={{marginRight: "5px", fontSize: "0.6em"}}>{content.count}</span>
                                <div className="flex-grow-1">
                                    <div className="d-flex flex-column">
                                        <Link to="#" style={{fontWeight: "normal", color: "#be4442", fontSize: "0.8em"}}>{content.title}</Link>
                                        <small style={{color: "#969696"}}>{content.points}{" points • "}{content.due}</small>
                                    </div>
                                </div>
                                <button type="button" className="btn-close" aria-label="Close" style={{fontSize: "0.5em", color: "#9ba0a5"}}></button>
                            </li>
                        ))
                    ))}
                </ul>


            </div>

        </div>
    );

}

export default Status