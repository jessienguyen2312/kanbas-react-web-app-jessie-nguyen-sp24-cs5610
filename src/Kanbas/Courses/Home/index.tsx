import ModuleList from "../Modules/List";
import Status from "./Status";
function Home() {
    return (
        <div className="d-flex flex-row flex-grow-1">
            <div className="d-flex flex-column flex-grow-1" style={{marginLeft: "30px", marginRight: "30px"}}>
                <ModuleList />
            </div>
            <Status/>
        </div>

    );
}
export default Home;