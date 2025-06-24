import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomOrder from "@/components/CustomOrder";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <CustomOrder />
      <Footer />
    </div>
  );
};

export default Index;
