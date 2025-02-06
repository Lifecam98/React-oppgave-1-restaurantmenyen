import DishCard from "./DishCard.jsx";
import "../styles/menuLayout.css";

const MenuLayout = ({ menu }) => {
	return (
		<>
			<h1 className="text-4xl text-blue-600 font-extrabold">Menu</h1>
			<ul>
				{menu.map((obj) => (
					<DishCard {...obj} key={obj.id} />
				))}
			</ul>
		</>
	);
};

export default MenuLayout;
