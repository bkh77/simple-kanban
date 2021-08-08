import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AddModal({ toggle, modal, handleSubmit, currentItem }) {
  const closeBtn = (
    <button className="close btn btn-sm btn-danger" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {currentItem ? "Edit" : "Add"} task
        </ModalHeader>
        <ModalBody>
          <form id="myForm" onSubmit={handleSubmit}>
            <input
              defaultValue={currentItem.title}
              type="text"
              className="form-control mb-3"
              placeholder="task title..."
            />
            <select className="form-select" defaultValue={currentItem.status}>
              <option value="Open">Open</option>
              <option value="Inprogress">Inprogress</option>
              <option value="Completed">Completed</option>
            </select>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>{" "}
          <Button type="submit" form="myForm" color="primary">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddModal;
