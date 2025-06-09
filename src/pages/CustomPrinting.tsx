
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CustomPrinting = () => {
  const products = [
    {
      name: "3D Logo Hoodie",
      description: "Comfortable hoodie with advanced 3D logo printing technology for a premium look",
      price: "$45",
      image: "/api/placeholder/300/200",
      rating: 5,
      customizable: true
    },
    {
      name: "Animated Print T-Shirt",
      description: "Revolutionary animated printing technology that brings your designs to life",
      price: "$35",
      image: "/api/placeholder/300/200",
      rating: 5,
      customizable: true
    },
    {
      name: "Premium Custom T-Shirt",
      description: "High-quality cotton t-shirt with custom image printing, perfect for personal designs",
      price: "$25",
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
          <h1 className="text-3xl font-bold text-navy mb-2">Custom Printing</h1>
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
                <SelectItem value="hoodies">Hoodies</SelectItem>
                <SelectItem value="tshirts">T-Shirts</SelectItem>
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

export default CustomPrinting;
