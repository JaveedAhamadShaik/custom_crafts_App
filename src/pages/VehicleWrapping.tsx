
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const VehicleWrapping = () => {
  const products = [
    {
      name: "Motorcycle Custom Paint",
      description: "Professional motorcycle painting service with custom colors and designs",
      price: "$600",
      image: "/api/placeholder/300/200",
      rating: 5,
      customizable: true
    },
    {
      name: "PPF Installation",
      description: "Paint Protection Film installation for ultimate vehicle protection with clear finish",
      price: "$1200",
      image: "/api/placeholder/300/200",
      rating: 5,
      customizable: false
    },
    {
      name: "Premium Car Wrap",
      description: "High-quality vinyl car wrap with custom design and professional installation",
      price: "$800",
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
          <h1 className="text-3xl font-bold text-navy mb-2">Vehicle Wrapping</h1>
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
                <SelectItem value="cars">Cars</SelectItem>
                <SelectItem value="motorcycles">Motorcycles</SelectItem>
                <SelectItem value="ppf">PPF Services</SelectItem>
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

export default VehicleWrapping;
