export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SpecialOffer {
  id: string;
  description: string;
  applies: (items: CartItem[]) => number;
}

export interface BillSummary {
  subtotal: number;
  offers: AppliedOffer[];
  totalSavings: number;
  finalTotal: number;
}

export interface AppliedOffer {
  description: string;
  saving: number;
}
