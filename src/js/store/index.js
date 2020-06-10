import {createStore, applyMiddleware} from "redux";
import rootReducer from "../modules/index";
import {censorMiddleWare} from "../middleware/WordFilter"

const store = createStore(
    rootReducer,
    applyMiddleware(censorMiddleWare)
    );

export default store;