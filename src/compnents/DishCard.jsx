const DishCard = ({ id, tittel, ingredienser, pris, kategori }) => {
	return (
		<div id="frame" className="font-mono bg-blue-600 rounded-4xl p-4">
			<h2 className="text-white font-extrabold">{tittel}</h2>
			<p className="font-semibold">{pris}</p>
			<p className="text-base/7">{ingredienser}</p>
			<p className="italic leading-15">{kategori}</p>
		</div>
	);
};

export default DishCard;
