import React from "react";

import {Categories, Pizza, Sort} from "@components";
import {useDispatch, useSelector} from "react-redux";

import {setCategory} from "@actions/filters";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = ['популярности', 'цене', 'алфавиту'];

export const Home = () => {
	const dispatch = useDispatch();
	const items = useSelector(({pizzas}) => pizzas.items);

	const onSelectedCategory = index => {
		dispatch(setCategory(index))
	}

	return (
		<div className="container">
			<div className="content__top">

				<Categories
					onClickItem={onSelectedCategory}
					items={categoryNames}/>

				<Sort items={sortItems}/>

			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{items && items.map(obj => (
					<Pizza key={obj.id} {...obj} />
				))}
			</div>
		</div>
	)
}
