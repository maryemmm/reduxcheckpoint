// ListTask.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import './ListTask.css';
const ListTask = () => {
  const [filter, setFilter] = useState("all");

  const filteredTasks = useSelector((state) =>
    state.filter((task) =>
      filter === "all" ? true : filter === "done" ? task.isDone : !task.isDone
    )
  );

  return (
    <div>
      <div>
        <label>
          Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="not-done">Not Done</option>
          </select>
        </label>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
