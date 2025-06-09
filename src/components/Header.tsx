
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-navy text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-orange hover:text-orange-light transition-colors">
          Custom Crafts
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-orange transition-colors">Home</Link>
          <Link to="/custom-printing" className="hover:text-orange transition-colors">Custom Printing</Link>
          <Link to="/riding-gear" className="hover:text-orange transition-colors">Riding Gear</Link>
          <Link to="/vehicle-wrapping" className="hover:text-orange transition-colors">Vehicle Wrapping</Link>
          <Link to="/mobile-accessories" className="hover:text-orange transition-colors">Mobile Accessories</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-orange transition-colors">
            🛒
          </button>
          <Button 
            onClick={() => navigate('/login')}
            className="bg-orange hover:bg-orange-dark text-white px-4 py-2 rounded"
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
