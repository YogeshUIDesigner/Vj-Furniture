import HeroSlider from '@/components/HeroSlider';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import FeaturedOffers from '@/components/FeaturedOffers';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import InstagramGallery from '@/components/InstagramGallery';
import Newsletter from '@/components/Newsletter';
import { latestProducts, bestSellers } from '@/data/products';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Categories />
      <ProductGrid title="Latest Products" products={latestProducts} />
      <ProductGrid title="Bestsellers" products={bestSellers} />
      <FeaturedOffers />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </main>
  );
}
