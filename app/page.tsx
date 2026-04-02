import Hero from "@/components/Hero";
import Features from "@/components/features/Features";
import About from "@/components/about/page";
import Services from "@/components/services/Services";
import Reviews from "@/components/reviews/Reviews";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import ScrollToTop from "@/components/ScrollToTop";
const page = () => {
  return (
    <>
    <ScrollToTop />
      <Hero />
      <About />
      <Features />
      <Services />
      <Reviews />
      <Team />
      <Pricing />
      
    </>
  );
};

export default page;
