// Updated Home Page
import Hero from "@/components/Hero";
import Essentional from "@/components/Essentional";
import Gear from "@/components/Gear";
import Best from "@/components/Best";
import Section from "@/components/Section";
import Dontmiss from "@/components/Dontmiss";
import Footersection from "@/components/Footer_section";
import { fetchProducts, Product } from "@/sanity/lib/fetchProducts";

const Home = async () => {
  const products: Product[] = await fetchProducts();
  const bestProducts = products.slice(0, 3); // Extract first 3 products
  const gearProducts = products.slice(7, 10); // Extract next 3 for Gear

  return (
    <div className="font-helvetica">
      <Hero />
      <Best products={bestProducts} />
      <Section />
      <Gear products={gearProducts} />
      <Dontmiss />
      <Essentional />
      <Footersection />
    </div>
  );
};

export default Home;
