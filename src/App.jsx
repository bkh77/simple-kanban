import React from "react";
import { connect } from "react-redux";
import Kanban from "./components/Kanban";

function App({tasks}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card p-3 my-3 bg-info">
              <h3>Umumiy tasklar soni: {tasks.length} </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
            <Kanban status="Open" />
        </div>
        <div className="col">
            <Kanban status="Inprogress" />
        </div>
        <div className="col">
            <Kanban status="Completed" />
        </div>
      </div>
    </div>
  );
}

export default connect(({tasks})=>({tasks}))(App);
