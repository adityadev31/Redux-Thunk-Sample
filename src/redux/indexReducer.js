import { combineReducers } from "redux";
import dataReducer from "./reducers";

const reducer = combineReducers({
   data: dataReducer,
})

export default reducer;