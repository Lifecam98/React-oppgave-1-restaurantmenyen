const DishCard = ({ id, tittel, ingredienser, pris, kategori }) => {
	return (
		<div className="font-mono bg-blue-600 rounded-xl flex flex-col justify-between shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 m-4">
			<p>{id}</p>
			<h2 className="text-blue-200 font-extrabold text-2xl">{tittel}</h2>
			<p className="font-semibold">{pris}</p>
			<p className="text-base/7">{ingredienser}</p>

			<p className="italic leading-15">{kategori}</p>
		</div>
	);
};

export default DishCard;
