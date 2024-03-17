import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {KanbasState} from "../../../store";
import {addModule, deleteModule, setModule, updateModule} from "../modulesReducer";
import {RxUpdate} from "react-icons/rx";
import {FaPlus} from "react-icons/fa6";
import {IoTrashOutline} from "react-icons/io5";
import {FaEdit} from "react-icons/fa";

function ModuleModifier() {
    const {courseId} = useParams();

    const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
    const module = useSelector((state:KanbasState) =>
    state.modulesReducer.module);
    console.log(JSON.stringify(module))

    const dispatch = useDispatch();

    return(
        <div className="container">
            <h1>Modify Modules</h1>
            <div className="flex flex-row">
                <label className="form-label">Module Name</label>
                <input className="form-control" type="text" value={module.name} onChange={(e) =>
                    dispatch(setModule({...module, name: e.target.value}))}/>

                <label className="form-label">Module Description</label>
                <textarea className="form-control" value={module.description} onChange={(e) =>
                    dispatch(setModule({...module, description: e.target.value}))}/>
                <button className="button float-end" onClick={() => dispatch(addModule({...module, course: courseId}))} style={{backgroundColor: "#3c8250", color: "white"}}>
                    <FaPlus style={{marginBottom: "3px", marginTop: 0}}/>
                    Add
                </button>
                <button className="button" onClick={() => dispatch(updateModule(module))}>
                    <RxUpdate style={{marginBottom: "3px", marginTop: 0}}/>
                    Update
                </button>
            </div>
            <hr/>
            <h1>Published Modules ({moduleList.filter((module) => module.course === courseId).length})</h1>
            <ul className={"list-group"}>
                {moduleList.filter((module) => module.course === courseId).map((module, index) => (
                    <li key={index} className={"list-group-item"}>
                        <button className="button float-end" style={{backgroundColor: "#c33232", color: "white"}}  onClick={() => dispatch(deleteModule(module._id))}>
                            <IoTrashOutline style={{marginBottom: "3px", marginTop: 0}}/>
                            Delete
                        </button>

                        <span style={{fontSize: "1.5em"}}>{module.name}</span>

                        <button className="button" onClick={() => dispatch(setModule(module))} style={{marginTop: 0}}>
                            <FaEdit style={{marginBottom: "3px", marginTop: 0}}/>
                            Edit
                        </button>
                        <p><b>Module Id: </b>{module._id}</p>
                        <p><b>Module Name: </b> {module.name}</p>
                        <p><b>Module Description: </b> {module.description}</p>
                        <p>{JSON.stringify(module)}</p>

                    </li>
                ))}
            </ul>

        </div>

    )
}

export default ModuleModifier