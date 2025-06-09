
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RidingGear = () => {
  const products = [
    {
      name: "Custom Riding Gloves",
      description: "Professional riding gloves with grip enhancement and knuckle protection",
      price: "$40",
      image: "/api/placeholder/300/200",
      rating: 5,
      customizable: true
    },
    {
      name: "Professional Racing Helmet",
      description: "DOT certified racing helmet with advanced safety features and custom designs",
      price: "$150",
      image: "/api/placeholder/300/200",
      rating: 5,
      customizable: true
    },
    {
      name: "Protective Riding Jacket",
      description: "Premium leather riding jacket with armor protection and weather resistance",
      price: "$200",
      image: "/api/placeholder/300/200",
      rating: 5,
      customizable: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Riding Gear</h1>
          <p className="text-gray-600">3 products available</p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center">
            <span className="mr-2">🔽</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Products" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="helmets">Helmets</SelectItem>
                <SelectItem value="jackets">Jackets</SelectItem>
                <SelectItem value="gloves">Gloves</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Select defaultValue="name">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>

          <div className="ml-auto flex gap-2">
            <button className="p-2 border rounded hover:bg-gray-50">
              ⊞
            </button>
            <button className="p-2 border rounded hover:bg-gray-50">
              ☰
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RidingGear;
