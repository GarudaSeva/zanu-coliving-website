import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const address = "Street No. 2, Near SRH Salon, Gachibowli, Hyderabad - 500032";
  const mapUrl = "https://maps.google.com/?q=17.4419,78.3487"; // Coordinates from the poster

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-secondary">Location</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conveniently located in the heart of Gachibowli
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Map Container */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.3487!3d17.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzMwLjgiTiA3OMKwMjAnNTUuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zanu Sunidhi Guest Inn Location"
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Address</h3>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>

              <div className="pl-16">
                <h4 className="font-semibold mb-2">Nearby Landmarks</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Near SRH Salon</li>
                  <li>• Close to IT hubs and offices</li>
                  <li>• Easy access to public transport</li>
                  <li>• Shopping complexes nearby</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open(mapUrl, '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-accent/10 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Why Gachibowli?</h4>
              <p className="text-sm text-muted-foreground">
                Gachibowli is Hyderabad's premier IT hub, home to major tech companies and startups. 
                Our guest inn offers easy access to workplaces, entertainment, and essential services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
