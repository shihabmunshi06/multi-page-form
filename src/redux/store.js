import { createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

import allInfoReducer from "./allInfoReducer"

const store = createStore(allInfoReducer, composeWithDevTools())

export default store