import { useState } from "react";
import MenuLayout from "./compnents/MenuLayout.jsx";
import menu from "./data/menuItems.jsx";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("Alle");

	const categories = ["Alle", "Forrett", "Hovedrett", "Dessert"];

	const filteredMenu =
		selectedCategory === "Alle"
			? menu
			: menu.filter((item) => item.kategori === selectedCategory);

	return (
		<>
			<MenuLayout
				menu={filteredMenu}
				categories={categories}
				selectedCategory={selectedCategory}
				onCategoryChange={setSelectedCategory}
			/>
		</>
	);
}

export default App;
