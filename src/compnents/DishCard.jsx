const DishCard = ({ id, tittel, ingredienser, pris, kategori }) => {
	return (
		<div id="frame">
			<h2>{tittel}</h2>
			<p>{pris}</p>
			<p>{ingredienser}</p>
			<p>{kategori}</p>
		</div>
	);
};

export default DishCard;
