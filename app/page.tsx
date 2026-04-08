import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ChicagoStyle from "@/components/ChicagoStyle";
import WaysToEnjoy from "@/components/WaysToEnjoy";
import Community from "@/components/Community";
import FranchiseCTA from "@/components/FranchiseCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      <Navbar />
      <Hero />
      <MenuSection />
      <ChicagoStyle />
      <WaysToEnjoy />
      <Community />
      <FranchiseCTA />
      <Footer />
    </main>
  );
}
