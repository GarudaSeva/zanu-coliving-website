import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Wifi, Droplet, Wind, CheckCircle } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      type: "Single Sharing",
      price: "₹8,999",
      period: "/month",
      capacity: 1,
      features: ["Attached Washroom", "Hot Water", "Wi-Fi", "A/C Available"],
      popular: false,
    },
    {
      type: "Double Sharing",
      price: "₹6,999",
      period: "/month",
      capacity: 2,
      features: ["Attached Washroom", "Hot Water", "Wi-Fi", "A/C Available"],
      popular: true,
    },
    {
      type: "Triple Sharing",
      price: "₹5,999",
      period: "/month",
      capacity: 3,
      features: ["Attached Washroom", "Hot Water", "Wi-Fi", "A/C Available"],
      popular: false,
    },
  ];

  return (
    <section id="rooms" className="py-20 section-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-secondary">Rooms</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our comfortable and affordable room options
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                room.popular ? "border-secondary border-2" : ""
              }`}
            >
              {room.popular && (
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">{room.type}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  For {room.capacity} person{room.capacity > 1 ? "s" : ""}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">{room.price}</div>
                  <div className="text-muted-foreground">{room.period}</div>
                </div>

                <div className="space-y-3">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Check Availability
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All rooms are fully furnished with modern amenities
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Wifi className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">High-Speed Wi-Fi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplet className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">24/7 Hot Water</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wind className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">A/C Rooms Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
