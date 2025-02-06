import DishCard from "./DishCard.jsx";
import "../styles/menuLayout.css";

const MenuLayout = ({
	menu,
	categories,
	selectedCategory,
	onCategoryChange,
}) => {
	return (
		<>
			<h1 className="text-5xl text-blue-600 font-extrabold">Menu</h1>
			<div className="my-4">
				{categories.map((category) => (
					<button
						key={category}
						onClick={() => onCategoryChange(category)}
						className={`mx-2 px-4 py-2 rounded-lg ${
							selectedCategory === category
								? "bg-blue-600 text-blue-200"
								: "bg-blue-200 text-blue-800"
						}`}
					>
						{category}
					</button>
				))}
			</div>
			<ul>
				{menu.map((obj) => (
					<DishCard {...obj} key={obj.id} />
				))}
			</ul>
		</>
	);
};

export default MenuLayout;
