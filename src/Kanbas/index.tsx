import KanbasNavigation from "./Navigation";

function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation/>
            <div className="container" style={{ backgroundColor: "yellow" }}>
                <h1>Account</h1>
                <h1>Dashboard</h1>
                <h1>Courses</h1>
            </div>
        </div>
    );}
export default Kanbas;