import {combineReducers} from "redux";
import {appReducer} from "./app-reducer";
import {modalReducer} from "./modal-reducer";


export const rootReducer=combineReducers({
    app:appReducer,
    modal:modalReducer})




