'use client';

import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export default function Header({ onSearchChange, searchQuery }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-[#00449B] text-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
         
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>

      
          <div className="flex-1 mx-6 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </div>

          <Link href="/cart">
            <Button className="bg-[#002B66] hover:bg-[#001f4d] text-white rounded-md px-4 py-2 flex items-center relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span className="font-semibold">Cart</span>
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center text-xs rounded-full">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
