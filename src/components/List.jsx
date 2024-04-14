import React from "react";

export default function List(props) {
    return (
        <div>
            <input type="checkbox" id="todo" />
            <label for="todo">{props.task}</label>
            <br />
        </div>
    );
};

