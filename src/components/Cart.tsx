import { Plus, Minus, Trash2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, clearCart, removeFromCart } from '../store/cartSlice';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h2>
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
        <button
          onClick={handleClearCart}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors cursor-pointer"
        >
          <Trash2 size={18} />
          Clear
        </button>
      </div>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{item.product.name}</h3>
              <p className="text-sm text-gray-600">{formatPrice(item.product.price)} each</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(removeFromCart(item.product.id))}
                  className="p-1 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <button
                  onClick={() => dispatch(addToCart(item.product))}
                  className="p-1 rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <span className="font-bold text-gray-800 w-20 text-right">
                {formatPrice(item.product.price * item.quantity)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
