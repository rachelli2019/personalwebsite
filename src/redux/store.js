import { createStore } from "redux"
import rootReducer from "./reducers/index"

export default createStore(rootReducer);

// where is the store architecture/shape defined? is it defined by the reducers?