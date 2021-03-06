import "./scss/app.scss";

import React from "react";
import {useDispatch} from "react-redux";
import {Route, Switch} from "react-router-dom";

import {setPizzas} from "@actions/pizzas";

import {Header} from "@components";
import {Home, Cart} from "@pages";

export function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		fetch('http://localhost:3001/pizzas')
			.then(response => response.json())
			.then(data => {
				dispatch(setPizzas(data));
			});
	}, []);

	return (
		<div className="wrapper">
			<Header/>
			<div className="content">
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/cart" component={Cart}/>
				</Switch>
			</div>
		</div>
	)
}
