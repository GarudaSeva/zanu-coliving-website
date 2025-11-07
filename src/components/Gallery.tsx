import { useState } from "react";

// ✅ Import images directly
import bedroom1 from "@/assets/bedroom1.jpg";
import bedroom2 from "@/assets/bedroom2.jpg";
import bedroom3 from "@/assets/bedroom3.jpg";
import bedroom4 from "@/assets/bedroom4.jpg";
import bedroom5 from "@/assets/bedroom5.jpg";
import bedroom6 from "@/assets/bedroom6.jpg";
import dining1 from "@/assets/dining1.jpg";
import dining2 from "@/assets/dining2.jpg";
import dining3 from "@/assets/dining3.jpg";

interface GalleryItem {
  _id: string;
  category: string;
  alt: string;
  imageUrl: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Bedroom", "Dining"];

  const images: GalleryItem[] = [
    {
      _id: "1",
      category: "Bedroom",
      alt: "Cozy single bedroom with comfortable bed",
      imageUrl: bedroom1,
    },
    {
      _id: "2",
      category: "Bedroom",
      alt: "Minimal bedroom featuring a neat single bed",
      imageUrl: bedroom2,
    },
    {
      _id: "3",
      category: "Bedroom",
      alt: "Bedroom with bed and table setup for study or dining",
      imageUrl: bedroom3,
    },
    {
      _id: "4",
      category: "Bedroom",
      alt: "Well-ventilated bedroom with large windows for natural light",
      imageUrl: bedroom4,
    },
    {
      _id: "5",
      category: "Bedroom",
      alt: "Air-conditioned bedroom for cool and comfortable living",
      imageUrl: bedroom5,
    },
    {
      _id: "6",
      category: "Bedroom",
      alt: "Spacious bedroom with bed and study table for work or study",
      imageUrl: bedroom6,
    },
    {
      _id: "7",
      category: "Dining",
      alt: "Spacious dining hall with elegant furniture setup",
      imageUrl: dining1,
    },
    {
      _id: "8",
      category: "Dining",
      alt: "Dining area with refrigerator and modern setup",
      imageUrl: dining2,
    },
    {
      _id: "9",
      category: "Dining",
      alt: "Contemporary dining area with cozy ambiance and refrigerator",
      imageUrl: dining3,
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-16 section-pattern">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a virtual tour of our spaces
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredImages.map((image) => (
            <div
              key={image._id}
              className="group relative aspect-video rounded-xl overflow-hidden bg-muted hover:shadow-xl transition-all duration-300"
            >
              {/* Image with dim effect */}
              <img
                src={image.imageUrl}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text sliding up from bottom (fully hidden initially) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="text-white text-sm font-medium text-center drop-shadow-md">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
