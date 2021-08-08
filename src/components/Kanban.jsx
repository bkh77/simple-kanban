import React, { useState } from "react";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import AddModal from "./AddModal";
import { addTask, removeTask, editTask } from "../redux/action/action";

function Kanban({ tasks, status, addTask, removeTask, editTask }) {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target[0].value;
    const status = e.target[1].value;
    if (currentItem) {
      editTask({
        id: currentItem.id,
        title,
        status,
      });
      setCurrentItem("");
      toggle()
    } else {
      if (title && status) {
        addTask({
          id: tasks.length + 1,
          title,
          status,
        });
        toggle()
      }
    }
  }

  function handleEdit(item) {
    setCurrentItem(item);
    setModal(true);
  }

  return (
    <div>
      <div className="card p-3 mb-2 bg-light text-center">
        <h4>
          {status}{" "}
          <span className="badge bg-danger">
            {tasks.filter((i) => i.status === status).length}
          </span>{" "}
        </h4>
      </div>
      {tasks
        .filter((item) => item.status === status)
        .map((item) => (
          <div className="card mb-2 p-3" key={item.id}>
            <h6 className="my-3">{item.title}</h6>
            <ClearIcon
              onClick={() => removeTask(item.id)}
              className="delIcon"
            />
            <EditIcon onClick={() => handleEdit(item)} className="editIcon" />
          </div>
        ))}
      <button onClick={toggle} className="btn btn-outline-primary w-100">
        + add task
      </button>
      <AddModal
        currentItem={currentItem}
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default connect(({ tasks }) => ({ tasks }), {
  addTask,
  removeTask,
  editTask,
})(Kanban);
