const DishCard = ({ id, tittel, ingredienser, pris, kategori }) => {
	return (
		<div className="font-mono bg-blue-600 rounded-4xl flex flex-col justify-between">
			<p>{id}</p>
			<h2 className="text-blue-200 font-extrabold text-2xl">{tittel}</h2>
			<p className="font-semibold">{pris}</p>
			<p className="text-base/7">{ingredienser}</p>

			<p className="italic leading-15">{kategori}</p>
		</div>
	);
};

export default DishCard;
