import React from "react";
import App from "../App";

export default function Todo(props) {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)} />
                <label className="todo-label" htmlFor="todo-0">
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <span className="visually-hidden">{props.name}</span>
                <button type="button" className="btn" id="edit-btn">
                    Edit
                </button>
                <span className="visually-hidden">{props.name}</span>
                <button type="button" className="btn btn__danger" id="delete-btn" onClick={() => props.deleteTask(props.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}