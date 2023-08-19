// Task.js
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../actions/TaskActions";
import "./Task.css";
import { MDBIcon  ,MDBListGroupItem,MDBTooltip} from "mdb-react-ui-kit";
const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const updatedDescription = prompt("Edit task:", task.description);
    if (updatedDescription !== null) {
      dispatch(editTask(task.id, updatedDescription));
    }
  };
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(task.id));
    }
  };

  return (
    <div className={`task ${task.isDone ? "done" : ""}`}>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <span>{task.description}</span>

      <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                  <div className="d-flex flex-row justify-content-end mb-1">
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Edit todo"
                    >
                      <MDBIcon
                        fas
                        icon="pencil-alt"
                        className="me-3"
                        color="info"
                        onClick={handleEdit} />
                    </MDBTooltip>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Delete todo"
                    >
                      <MDBIcon fas icon="trash-alt" color="danger" onClick={handleDelete}/>
                    </MDBTooltip>
                    </div>
                    </MDBListGroupItem>
                    </div>
);
};

export default Task;
