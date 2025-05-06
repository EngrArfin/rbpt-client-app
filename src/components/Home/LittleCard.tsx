import React from "react";
import { Star } from "lucide-react"; // or use react-icons if preferred
import { IProduct } from "@/type/types";

type ProductCardProps = {
  product: IProduct;
  onAddToCart: (product: IProduct) => void;
};

const LittleCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < product.rating ? "#facc15" : "none"}
              stroke="#facc15"
            />
          ))}
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-4 py-1.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default LittleCard;
