import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, image, title, category, price } = product;

  return (
    <NavLink
      to={`/products/${id}`}
      className="block h-full cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        <div className="relative pt-[70%]">
          <img
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <span className="text-xs font-semibold uppercase text-gray-500 mb-1">
            {category}
          </span>

          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {title}
          </h3>

          <div className="mt-auto">
            <p className="text-xl font-bold text-blue-600">₹{price}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
