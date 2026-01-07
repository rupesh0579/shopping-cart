import type { CartItem, SpecialOffer } from "../types";

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'cheese-bogo',
    description: 'Buy a Cheese, get a second Cheese free!',
    applies: (items: CartItem[]): number => {
      const cheeseItem = items.find(item => item.product.id === 'cheese');
      if (!cheeseItem) return 0;

      const freeCheese = Math.floor(cheeseItem.quantity / 2);
      return freeCheese * cheeseItem.product.price;
    },
  },
  {
    id: 'soup-bread',
    description: 'Buy a Soup, get half price Bread!',
    applies: (items: CartItem[]): number => {
      const soupItem = items.find(item => item.product.id === 'soup');
      const breadItem = items.find(item => item.product.id === 'bread');

      if (!soupItem || !breadItem) return 0;

      const discountedBreads = Math.min(soupItem.quantity, breadItem.quantity);
      return discountedBreads * (breadItem.product.price * 0.5);
    },
  },
  {
    id: 'butter-third-off',
    description: 'Get a third off Butter!',
    applies: (items: CartItem[]): number => {
      const butterItem = items.find(item => item.product.id === 'butter');
      if (!butterItem) return 0;

      return butterItem.quantity * butterItem.product.price * (1 / 3);
    },
  },
];
