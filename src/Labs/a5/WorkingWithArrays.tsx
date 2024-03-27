import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const API = "http://localhost:4000/a5/todos";



    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };

    const removeTodo = async (todo: any) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id: any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };



    useEffect(() => {
        fetchTodos();
    }, []);


    return (
        <div>
            <h3>Working with Arrays</h3>

            <div className="col-5">

                <label className="label">Todo Id</label>
                <input value={todo.id} onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}/>
                <br/>
                <label className="label">Todo Title</label>
                <input value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>

                <br/>
                <button className="btn btn-primary" onClick={createTodo}>
                    Create Todo
                </button>
                <br/>
                <button className="btn btn-success" onClick={updateTitle}>
                    Update Title
                </button>


                <ul className="list-group">
                    {todos.map((todo: any) => (
                        <li key={todo.id} className="list-group-item">
                            {todo.title}
                            <button className="btn btn-danger float-end" onClick={() => removeTodo(todo)} >
                                Remove
                            </button>
                            <button className="btn btn-warning float-end" onClick={() => fetchTodoById(todo.id)} >
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
            </div>


            <h4>Retrieving Arrays</h4>
            <a href={API}>
                Get Todos
            </a>

            <h4>Retrieving an Item from an Array by ID</h4>
            <h5>Item Id</h5>
            <input type="number" value={todo.id}
                   onChange={(e) => setTodo({ ...todo,
                       id: parseInt(e.target.value) })}/>
            <h5>Item title</h5>
            <input type="text" value={todo.title}
                   onChange={(e) => setTodo({
                       ...todo, title: e.target.value })}/>
            <br/>
            <h5>Item description</h5>
            <input type="text" value={todo.description}
                   onChange={(e) => setTodo({
                       ...todo, description: e.target.value })}/>
            <br/>
            <h5>Item completion status</h5>
            <input type="checkbox"
                   onChange={(e) => setTodo({...todo,
                       completed: e.target.checked})} checked={todo.completed}/>


            <h3>Updating an Item in an Array</h3>
            <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title ID=1 to {todo.title}
            </a>
            <br/>
            <a className="btn btn-primary" href={`${API}/${todo.id}/description/${todo.description}`} >
                Update description ID=1 to {todo.description}
            </a>
            <br/>
            <a className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`} >
                Update Completion status ID=1
            </a>

            <br/>

            <a href={`${API}/${todo.id}`}>
                Get Todos by ID
            </a>

            <h3>Filtering Array Items</h3>
            <a className="btn btn-primary" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>

            <h3>Creating new Items in an Array</h3>
            <a className="btn btn-primary" href={`${API}/create`}>
                Create Todo
            </a>

            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>


        </div>
    );
}
export default WorkingWithArrays;