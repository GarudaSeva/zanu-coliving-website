import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Zanu</span>
              <span className="text-accent"> Sunidhi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Affordable and comfortable co-living spaces
            </p>
            <p className="text-sm text-muted-foreground">
              in the heart of Gachibowli, Hyderabad.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:8437085252"
                    className="hover:text-primary transition-colors block"
                  >
                    8437085252
                  </a>
                  <a
                    href="tel:8919581753"
                    className="hover:text-primary transition-colors block"
                  >
                    8919581753
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="mailto:zanusunidhi5659@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  zanusunidhi5659@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Location</h3>
            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p>
                Street No. 2, Near SRH Salon, <br />
                Gachibowli, Hyderabad - 500032
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground mt-8">
          <p>© {currentYear} Zanu Sunidhi Guest Inn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
