import { products } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find(p => p.id === params.id) || null;

  return <ProductDetailClient product={product} />;
}