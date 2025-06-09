
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Custom Printing",
      description: "Premium t-shirts and hoodies with advanced printing techniques including image printing, 3D logos, and animated designs.",
      features: ["Image Printing", "3D Logo Printing", "Animated Designs", "Premium Materials"],
      image: "/api/placeholder/400/300",
      link: "/custom-printing"
    },
    {
      title: "Riding Gear",
      description: "Professional riding equipment including helmets, jackets, and protective gear for all types of riders.",
      features: ["Safety Helmets", "Protective Jackets", "Riding Accessories", "Custom Designs"],
      image: "/api/placeholder/400/300",
      link: "/riding-gear"
    },
    {
      title: "Vehicle Wrapping",
      description: "Professional vehicle wrapping and painting services for bikes and cars with premium materials.",
      features: ["PPF Installation", "Custom Painting", "Bike Wrapping", "Car Styling"],
      image: "/api/placeholder/400/300",
      link: "/vehicle-wrapping"
    },
    {
      title: "Mobile Accessories",
      description: "Complete mobile accessory solutions including displays, pouches, back covers, and protective wraps.",
      features: ["Screen Replacements", "Custom Cases", "Protective Wraps", "Phone Accessories"],
      image: "/api/placeholder/400/300",
      link: "/mobile-accessories"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Transform Your Ideas Into <span className="text-orange">Reality</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Your premier destination for custom printing, riding gear, vehicle wrapping, and mobile 
            accessories. Professional quality, creative designs, and exceptional service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={() => navigate('/custom-printing')}
              className="bg-orange hover:bg-orange-dark text-white px-8 py-3 text-lg"
            >
              Explore Services →
            </Button>
            <Button 
              onClick={() => navigate('/login')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl text-orange mb-2">👥</div>
              <div className="text-3xl font-bold text-navy">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl text-orange mb-2">🏆</div>
              <div className="text-3xl font-bold text-navy">4.9/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl text-orange mb-2">🕒</div>
              <div className="text-3xl font-bold text-navy">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl text-orange mb-2">⭐</div>
              <div className="text-3xl font-bold text-navy">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of professional services designed to bring your 
              creative vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
