import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import kanbanReducer from "./redux/reducers/kanbanReducer";

export default createStore(kanbanReducer, applyMiddleware(logger));
