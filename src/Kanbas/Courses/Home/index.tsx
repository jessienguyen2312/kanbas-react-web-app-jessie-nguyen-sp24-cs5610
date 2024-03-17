import ModuleList from "../Modules/List";
import Status from "./Status";
function Home() {
    return (
        <div className="d-flex flex-row flex-grow-1">
            <ModuleList />
            <Status/>
        </div>

    );
}
export default Home;