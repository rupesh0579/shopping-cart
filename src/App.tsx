import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { BillSummary } from './components/BillSummary';
import { SpecialOffers } from './components/SpecialOffers';
import { ShoppingBasket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ShoppingBasket className="text-orange-500" size={40} />
            <h1 className="text-4xl font-bold text-purple-950">Shopping Cart</h1>
          </div>
          <p className="text-gray-600">Select products and see your bill with special offers applied</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <ProductList />
            <SpecialOffers />
          </div>

          <div className="space-y-6">
            <Cart />
            <BillSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
