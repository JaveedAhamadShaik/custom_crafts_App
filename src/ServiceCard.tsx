
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, features, image, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale animate-fade-in">
      <div className="h-48 bg-gradient-to-r from-navy to-navy-light flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <span className="text-orange mr-2">⭐</span>
              {feature}
            </div>
          ))}
        </div>
        
        <Link to={link}>
          <Button className="w-full bg-orange hover:bg-orange-dark text-white">
            Learn More →
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
