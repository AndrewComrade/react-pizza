import React from "react";

export const Categories = ({items, onClickItem}) => {
	const [activeItem, setActiveItem] = React.useState(null);

	const onSelectedItem = index => {
		setActiveItem(index);
		onClickItem(index);
	}

	return (
		<div className="categories">
			<ul>
				<li
					className={activeItem === null ? "active" : ""}
					onClick={() => onSelectedItem(null)}>
					Все
				</li>

				{items &&
				items.map((item, index) => (
					<li
						key={`${name}_${index}`}
						className={activeItem === index ? "active" : ""}
						onClick={() => onSelectedItem(index)}>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}