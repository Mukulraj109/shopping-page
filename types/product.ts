export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  searchQuery: string;
}