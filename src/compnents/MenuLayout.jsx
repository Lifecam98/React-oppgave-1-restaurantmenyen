import DishCard from "./DishCard.jsx";
import "../styles/menuLayout.css";

const MenuLayout = ({ menu }) => {
	return (
		<>
			<h1>Menu</h1>
			<ul>
				{menu.map((obj) => (
					<DishCard {...obj} key={obj.id} />
				))}
			</ul>
		</>
	);
};

export default MenuLayout;
