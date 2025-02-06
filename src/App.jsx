import { useState } from "react";
import MenuLayout from "./compnents/MenuLayout.jsx";
import menu from "./data/menuItems.jsx";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("Alle");
	const [priceSort, setPriceSort] = useState("none")

	const categories = ["Alle", "Forrett", "Hovedrett", "Dessert"];

	const filteredMenu = menu
		.filter(item => selectedCategory === "Alle" ? true : item.kategori === selectedCategory)
		.sort((a, b) => {
			if (priceSort === "ascending") {
				return parseInt(a.pris) - parseInt(b.pris);
			} else if (priceSort === "descending") {
				return parseInt(b.pris) - parseInt(a.pris);
			}
			return 0;
		});


	return (
		<>
			<MenuLayout
				menu={filteredMenu}
				categories={categories}
				selectedCategory={selectedCategory}
				onCategoryChange={setSelectedCategory}
				priceSort={priceSort}
				onPriceSortChange={setPriceSort}
			/>
		</>
	);
}

export default App;
