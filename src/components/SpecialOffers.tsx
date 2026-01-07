import { Tag } from 'lucide-react';

export const SpecialOffers = () => {
  const offers = [
    'When you buy a Cheese, you get a second Cheese free!',
    'When you buy a Soup, you get a half price Bread!',
    'Get a third off Butter!',
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="text-green-600" size={24} />
        <h2 className="text-2xl font-bold text-gray-800">Special Offers</h2>
      </div>
      <div className="space-y-3">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg"
          >
            <p className="text-gray-700">{offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
