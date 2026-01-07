import { ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../constants/products';
import { useAppDispatch } from '../store/hooks';
import type { Product } from '../types';
import { addToCart } from '../store/cartSlice';

export const ProductList = () => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const formatPrice = (price: number): string => {
    return price >= 1 ? `£${price.toFixed(2)}` : `${Math.round(price * 100)}p`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Products & Prices</h2>
      <div className="space-y-3">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</p>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <ShoppingCart size={18} />
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
