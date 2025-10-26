import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Rooms />
      <Facilities />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
