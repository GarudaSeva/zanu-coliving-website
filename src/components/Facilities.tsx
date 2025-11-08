import { Bed, Droplet, Wifi, Shield, WashingMachine , Utensils, Car, Tv, Wind, Refrigerator, Newspaper, Camera } from "lucide-react";

const Facilities = () => {
  const facilities = [
    { icon: Bed, title: "Fully Furnished Rooms", color: "text-primary" },
    { icon: Droplet, title: "Attached Washroom", color: "text-secondary" },
    { icon: Shield, title: "Safe Double Door Wooden Cupboards", color: "text-accent" },
    { icon: Droplet, title: "Hot Water", color: "text-primary" },
    { icon: WashingMachine , title: "Washing Machine", color: "text-secondary" },
    { icon: Utensils, title: "House Keeping 24x7 Services", color: "text-accent" },
    { icon: Wifi, title: "High Speed Wi-Fi", color: "text-primary" },
    { icon: Wind, title: "All A/C Rooms", color: "text-secondary" },
    { icon: Droplet, title: "Geyser", color: "text-accent" },
    { icon: Refrigerator, title: "Refrigerator", color: "text-primary" },
    { icon: Camera, title: "24x7 CCTV Security", color: "text-secondary" },
    { icon: Newspaper, title: "Daily News Paper (Telugu+Eng)", color: "text-accent" },
  ];

  return (
    <section id="facilities" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Facilities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for a comfortable stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="group flex items-start space-x-4 p-6 rounded-xl bg-card hover:bg-accent/5 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors ${facility.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {facility.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Premium Living Experience
            </h3>
            <p className="text-muted-foreground mb-6">
              We provide all essential amenities to ensure your comfort and convenience. 
              From 24/7 security to modern appliances, everything is taken care of.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">24/7 Security</span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full">Power Backup</span>
              <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full">Regular Housekeeping</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Maintenance Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
