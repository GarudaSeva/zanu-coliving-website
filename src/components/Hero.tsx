import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 text-shadow">
              Zanu <span className="text-accent">Sunidhi</span>
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Guest Inn
            </p>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 italic">
              Co-Living
            </p>
          </div>

          {/* Price Badge */}
          <div className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full mb-8 transform hover:scale-105 transition-transform">
            <p className="text-sm font-semibold uppercase">Starting @</p>
            <p className="text-4xl font-bold">₹599/-</p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-primary-foreground">
            <span className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              A/C & Non A/C
            </span>
            <span className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              Hourly
            </span>
            <span className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              Daily
            </span>
            <span className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              Weekly
            </span>
            <span className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              Monthly
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Rooms
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 text-primary-foreground/90 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <a href="tel:8437085252" className="hover:text-accent transition-colors">
                8437085252
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:zanusunidhi5659@gmail.com" className="hover:text-accent transition-colors text-sm">
                zanusunidhi5659@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Gachibowli, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
