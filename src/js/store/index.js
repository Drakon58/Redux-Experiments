import {createStore, applyMiddleware} from "redux";
import rootReducer from "../modules/index";
import {censorMiddleWare} from "../middleware/WordFilter"
import thunk from 'redux-thunk'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, censorMiddleWare)
    );

export default store;