import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'clothing',
    description: 'High-performance running shoes with advanced cushioning technology for maximum comfort during your workouts.',
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 149,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'electronics',
    description: 'Premium wireless headphones with noise cancellation and superior sound quality.',
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'accessories',
    description: 'Durable and spacious backpack perfect for travel, work, or daily use.',
    rating: 4.3,
    reviews: 67
  },
  {
    id: '4',
    title: 'Smartwatch',
    price: 249,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'electronics',
    description: 'Advanced smartwatch with health tracking, GPS, and long battery life.',
    rating: 4.6,
    reviews: 156
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'accessories',
    description: 'Stylish sunglasses with UV protection and polarized lenses.',
    rating: 4.4,
    reviews: 92
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'electronics',
    description: 'Professional digital camera with high-resolution sensor and advanced features.',
    rating: 4.8,
    reviews: 234
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'clothing',
    description: 'Comfortable cotton t-shirt available in various colors and sizes.',
    rating: 4.2,
    reviews: 145
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'electronics',
    description: 'Latest smartphone with advanced camera system and fast processing power.',
    rating: 4.9,
    reviews: 412
  },
  {
    id: '9',
    title: 'Laptop',
    price: 899,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'electronics',
    description: 'High-performance laptop perfect for work, gaming, and creative tasks.',
    rating: 4.6,
    reviews: 178
  },
  {
    id: '10',
    title: 'Sneakers',
    price: 79,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'clothing',
    description: 'Casual sneakers with modern design and comfortable fit.',
    rating: 4.3,
    reviews: 89
  },
  {
    id: '11',
    title: 'Tablet',
    price: 399,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'electronics',
    description: 'Portable tablet with high-resolution display and long battery life.',
    rating: 4.5,
    reviews: 123
  },
  {
    id: '12',
    title: 'Jacket',
    price: 159,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    category: 'clothing',
    description: 'Stylish jacket perfect for any season with water-resistant material.',
    rating: 4.4,
    reviews: 76
  }
];

export const categories = [
  { id: 'all', name: 'All', count: products.length },
  { id: 'electronics', name: 'Electronics', count: products.filter(p => p.category === 'electronics').length },
  { id: 'clothing', name: 'Clothing', count: products.filter(p => p.category === 'clothing').length },
  { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length },
];