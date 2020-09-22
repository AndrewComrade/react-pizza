import React, {useState} from "react";

export function Categories(props) {
	const {items} = props;

	const [activeItem, setActiveItem] = useState(null);

	return (
		<div className="categories">
			<ul>
				<li
					className={activeItem === null ? "active" : ""}
					onClick={() => setActiveItem(null)}>
					Все
				</li>

				{items &&
					items.map((item, index) => (
					<li
						key={`${name}_${index}`}
						className={activeItem === index ? "active" : ""}
						onClick={() => setActiveItem(index)}>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}