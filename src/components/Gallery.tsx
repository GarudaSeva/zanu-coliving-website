import { useState } from "react";

const Gallery = () => {
  // Placeholder images - will be replaced with actual images from admin
  const images = [
    { id: 1, category: "Bedroom", alt: "Comfortable bedroom" },
    { id: 2, category: "Dining", alt: "Dining area" },
    { id: 3, category: "Bedroom", alt: "Single room" },
    { id: 4, category: "Common Area", alt: "Common space" },
    { id: 5, category: "Bedroom", alt: "Double sharing room" },
    { id: 6, category: "Dining", alt: "Kitchen area" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Bedroom", "Dining", "Common Area"];

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 section-pattern">
      <div className="container mx-auto px-4">
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
              key={image.id}
              className="group relative aspect-video rounded-xl overflow-hidden bg-muted hover:shadow-xl transition-all duration-300"
            >
              {/* Placeholder with gradient and icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="text-sm font-medium">{image.category}</p>
                  <p className="text-xs text-muted-foreground">{image.alt}</p>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note about images */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            Images will be managed through the admin panel
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
