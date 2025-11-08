import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient pt-20 sm:pt-0"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Heading */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-2 sm:mb-4 leading-tight sm:leading-snug text-shadow">
              Zanu <span className="text-accent">Sunidhi</span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-1 sm:mb-2 leading-snug">
              Guest Inn
            </p>
            <p className="text-lg sm:text-2xl md:text-3xl text-primary-foreground/90 italic leading-snug">
              Co-Living
            </p>
          </div>

          {/* Price Badge */}
          <div className="inline-block bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full mb-6 sm:mb-8 transform hover:scale-105 transition-transform">
            <p className="text-xs sm:text-sm font-semibold uppercase">Starting @</p>
            <p className="text-2xl sm:text-4xl font-bold">₹599/-</p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-primary-foreground text-sm sm:text-base">
            {["A/C & Non A/C", "Hourly", "Daily", "Weekly", "Monthly"].map(
              (item, i) => (
                <span
                  key={i}
                  className="bg-primary-foreground/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
              onClick={() =>
                document
                  .getElementById("rooms")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Rooms
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 text-primary-foreground/90 max-w-3xl mx-auto text-sm sm:text-base">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <a
                href="tel:8437085252"
                className="hover:text-accent transition-colors"
              >
                8437085252
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:zanusunidhi5659@gmail.com"
                className="hover:text-accent transition-colors text-xs sm:text-sm"
              >
                zanusunidhi5659@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-xs sm:text-sm">Gachibowli, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — show only on desktop */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-4">
          <div className="w-1 h-3 bg-primary-foreground rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
