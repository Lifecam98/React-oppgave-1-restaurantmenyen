import DishCard from "./DishCard.jsx";
import "../styles/menuLayout.css";

const MenuLayout = ({
	menu,
	categories,
	selectedCategory,
	onCategoryChange,
	priceSort,
	onPriceSortChange,
}) => {
	return (
		<>
			<h1 className="text-5xl text-blue-600 font-extrabold">Lars' skikkelig digge restaurantmeny</h1>
			<div className="my-4">
				<div className="mb-2">
					<span className="text-blue-200">Sorter type rett:</span>
				</div>
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
			<div className="my-4">
				<div className="mb-2">
					<span className="text-blue-200">Sorter etter pris:</span>
				</div>
								<button
                    onClick={() => onPriceSortChange("none")}
                    className={`mx-2 px-4 py-2 rounded-lg ${
                        priceSort === "none"
                            ? "bg-blue-600 text-blue-200"
                            : "bg-blue-200 text-blue-800"
                    }`}
                >
                    Ingen sortering
                </button>
				<button onClick={() => onPriceSortChange("ascending")}
					className={`mx-2 px-4 py-2 rounded-lg ${priceSort === "ascending" ? "bg-blue-600 text-blue-200" : "bg-blue-200 text-blue-800"}`}
				>
					Stigende
				</button>
				<button onClick={() => onPriceSortChange("descending")}
					className={`mx-2 px-4 py-2 rounded-lg ${priceSort === "descending" ? "bg-blue-600 text-blue-200" : "bg-blue-200 text-blue-800"}`}
				>
					Synkende
				</button>
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
