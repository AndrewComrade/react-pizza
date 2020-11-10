import {combineReducers} from "redux";

import filterReducer from "./filters"
import pizzasReducer from "./pizzas"

export const rootReducer = combineReducers({
	filters: filterReducer,
	pizzas: pizzasReducer
})
