
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = "javeedahamadshaik"; // Mock user data

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Welcome back, {userName}!</h1>
          <p className="text-gray-600">Manage your account and track your orders</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Profile */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {userName.charAt(0).toUpperCase()}
              </div>
              <h3 className="text-xl font-semibold text-navy">{userName}</h3>
              <p className="text-gray-600">{userName}@gmail.com</p>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center text-left p-3 hover:bg-gray-50 rounded">
                <span className="mr-3">📦</span>
                My Orders
              </button>
              <button className="w-full flex items-center text-left p-3 hover:bg-gray-50 rounded">
                <span className="mr-3">💖</span>
                Wishlist
              </button>
              <button className="w-full flex items-center text-left p-3 hover:bg-gray-50 rounded">
                <span className="mr-3">⚙️</span>
                Account Settings
              </button>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center text-left p-3 hover:bg-gray-50 rounded text-red-600"
              >
                <span className="mr-3">🚪</span>
                Logout
              </button>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-navy mb-4">Recent Orders</h3>
            <div className="text-center py-8">
              <div className="text-6xl text-gray-300 mb-4">📦</div>
              <p className="text-gray-600 mb-4">No orders yet</p>
              <Button 
                onClick={() => navigate("/custom-printing")}
                className="bg-orange hover:bg-orange-dark text-white"
              >
                Start Shopping
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-navy mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/custom-printing">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange transition-colors">
                  <div className="text-2xl mb-2">👕</div>
                  <p className="text-sm text-gray-600">Custom Printing</p>
                </div>
              </Link>
              <Link to="/riding-gear">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange transition-colors">
                  <div className="text-2xl mb-2">🏍️</div>
                  <p className="text-sm text-gray-600">Riding Gear</p>
                </div>
              </Link>
              <Link to="/vehicle-wrapping">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange transition-colors">
                  <div className="text-2xl mb-2">🚗</div>
                  <p className="text-sm text-gray-600">Vehicle Wrapping</p>
                </div>
              </Link>
              <Link to="/mobile-accessories">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange transition-colors">
                  <div className="text-2xl mb-2">📱</div>
                  <p className="text-sm text-gray-600">Mobile Accessories</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
