import "./scss/app.scss";
import React from "react";
import {Route, Switch} from "react-router-dom";

import {Header} from "@components";
import {Home, Cart} from "@pages";

export function App() {
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