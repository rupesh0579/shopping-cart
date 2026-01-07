import { useMemo } from 'react';
import { Receipt, Tag } from 'lucide-react';
import { SPECIAL_OFFERS } from '../utils/offers';
import { useAppSelector } from '../store/hooks';

export const BillSummary = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const billDetails = useMemo(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    const appliedOffers = SPECIAL_OFFERS.map((offer) => ({
      description: offer.description,
      saving: offer.applies(cartItems),
    })).filter((offer) => offer.saving > 0);

    const totalSavings = appliedOffers.reduce(
      (sum, offer) => sum + offer.saving,
      0
    );

    const finalTotal = subtotal - totalSavings;

    return {
      subtotal,
      offers: appliedOffers,
      totalSavings,
      finalTotal,
    };
  }, [cartItems]);

  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Receipt className="text-blue-600" size={24} />
        <h2 className="text-2xl font-bold text-gray-800">Bill Summary</h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center pb-3 border-b border-gray-300">
          <span className="text-lg text-gray-700">Subtotal</span>
          <span className="text-xl font-semibold text-gray-800">
            {formatPrice(billDetails.subtotal)}
          </span>
        </div>

        {billDetails.offers.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-700">
              <Tag size={18} />
              <h3 className="font-semibold">Special Offers Applied</h3>
            </div>
            {billDetails.offers.map((offer, index) => (
              <div
                key={index}
                className="flex justify-between items-start bg-green-50 p-3 rounded-lg"
              >
                <div className="flex-1">
                  <p className="text-sm text-gray-700">{offer.description}</p>
                </div>
                <span className="text-green-700 font-semibold ml-4">
                  -{formatPrice(offer.saving)}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 border-t border-green-200">
              <span className="text-md font-semibold text-green-700">Total Savings</span>
              <span className="text-lg font-bold text-green-700">
                -{formatPrice(billDetails.totalSavings)}
              </span>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-4 border-t-2 border-gray-400">
          <span className="text-xl font-bold text-gray-800">Final Total</span>
          <span className="text-3xl font-bold text-blue-600">
            {formatPrice(billDetails.finalTotal)}
          </span>
        </div>
      </div>
    </div>
  );
};
