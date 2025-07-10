'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-md transition-shadow duration-200 text-sm max-w-xs mx-auto">
      <CardContent className="p-0">
        <Link href={`/product/${product.id}`}>
          <div className="aspect-[4/3] overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={240}
              height={180}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        </Link>
        <div className="p-3">
          <Link href={`/product/${product.id}`}>
            <h3 className="font-medium text-base mb-1 hover:text-blue-600 transition-colors line-clamp-2">
              {product.title}
            </h3>
          </Link>
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
          </div>
          <p className="text-xl font-semibold text-blue-600 mb-3">
            ${product.price}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-xs text-white"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
