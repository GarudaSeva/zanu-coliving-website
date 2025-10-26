"use client"

import { useRef, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Wifi,
  Droplet,
  Wind,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface RoomType {
  _id: string;
  type: string;
  price: string;
  period?: string;
  capacity: number;
  popular?: boolean;
}

const defaultFeatures = [
  "Fully Furnished",
  "Attached Washroom",
  "Wi-Fi",
  "Geyser",
];

const RoomsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [rooms, setRooms] = useState<RoomType[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("https://zanu-sunidhi-coliving-4.onrender.com/api/rooms");
        const data: RoomType[] = await res.json();
        setRooms(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRooms();
  }, []);

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollRef;
    if (current) {
      const containerWidth = current.offsetWidth;
      current.scrollBy({
        left: direction === "left" ? -containerWidth : containerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/40 relative">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-secondary">Rooms</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our stylish and affordable room options designed for
            modern living
          </p>
        </div>

        {/* Carousel Box */}
        <div className="relative border border-border/50 rounded-2xl p-6 bg-white/60 backdrop-blur-sm shadow-md">
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-white hover:bg-primary/90 rounded-full p-2 shadow-md z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory ml-6"
          >
            {rooms.map((room) => (
              <Card
                key={room._id}
                data-carousel-item
                className={`flex-shrink-0 w-[90%] sm:w-[48%] md:w-[32%] lg:w-[23%] snap-center border border-border/40 bg-white/80 backdrop-blur-md hover:-translate-y-2 transition-all duration-300 hover:shadow-xl ${
                  room.popular
                    ? "border-secondary/80 shadow-[0_0_20px_rgba(255,200,0,0.3)]"
                    : ""
                }`}
              >
                {room.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary to-amber-400 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                    Popular
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg font-semibold">{room.type}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    For {room.capacity} person{room.capacity > 1 ? "s" : ""}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{room.price}</div>
                    <div className="text-muted-foreground text-sm">{room.period || "/month"}</div>
                  </div>

                  <div className="space-y-2 text-left">
                    {defaultFeatures.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white hover:bg-primary/90 rounded-full p-2 shadow-md z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            All rooms are fully furnished with modern amenities and 24/7 support
          </p>
          <div className="flex flex-wrap justify-center gap-8">
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

export default RoomsCarousel;
