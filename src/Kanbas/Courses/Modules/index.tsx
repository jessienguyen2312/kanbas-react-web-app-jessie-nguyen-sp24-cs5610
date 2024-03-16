import ModuleList from "./List";
import {Route, Routes} from "react-router-dom";
import ModuleModifier from "./ModuleModifier";
function Modules() {
    return (
        <div className="d-flex flex-column flex-grow-1" style={{marginLeft: "10px", marginRight: "20px"}}>
            <ModuleList />
        </div>
    );
}
export default Modules;

