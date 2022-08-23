import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./blogs/reducer";


const store = createStore(reducer, composeWithDevTools())

export default store