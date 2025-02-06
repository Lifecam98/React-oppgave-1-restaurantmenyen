import { useState } from "react";
import MenuLayout from "./compnents/MenuLayout.jsx";
import menu from "./data/menuItems.jsx";

function App() {
	return (
		<>
			<MenuLayout menu={menu} />
		</>
	);
}

export default App;
