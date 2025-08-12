import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsappButton from '@/components/whatsapp-button';
import ProductDetail from '@/components/product-detail';
import { products } from '@/data/products';
import { CartProvider } from '@/context/cart-context';

type ProductPageProps = {
    params: {
        id: string;
    }
}

export function generateStaticParams() {
    return products.map((product) => ({
      id: product.id.toString(),
    }))
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id.toString() === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
            <ProductDetail product={product} />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </CartProvider>
  );
}
