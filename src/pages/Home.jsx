import React from "react";

import {Categories, Pizza, Sort} from "@components";
import {useSelector} from "react-redux";

export const Home = () => {
	const {items} = useSelector(({filters, pizzas}) => {
		return {
			filter: filters.sortBy,
			items: pizzas.items
		}
	})

	return (
		<div className="container">
			<div className="content__top">

				<Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
{/*
				{name: 'популярности', type: 'popular'},
				{name: 'цене', type: 'price'},
				{name: 'алфавиту', type: 'alphabet'},*/}
				<Sort items={['популярности', 'цене', 'алфавиту']}/>

			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{items && items.map((obj) => (
					<Pizza key={obj.id} {...obj} />
				))}
			</div>
		</div>
	)
}
