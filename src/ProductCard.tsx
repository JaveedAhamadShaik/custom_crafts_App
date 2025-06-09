
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  customizable?: boolean;
}

const ProductCard = ({ name, description, price, image, rating, customizable }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale animate-fade-in">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          ♡
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-navy mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? "★" : "☆"}>★</span>
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({rating})</span>
          {customizable && (
            <span className="ml-auto text-xs bg-orange text-white px-2 py-1 rounded">
              Customizable
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-navy">{price}</span>
          <Button className="bg-orange hover:bg-orange-dark text-white px-4 py-2">
            🛒
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
