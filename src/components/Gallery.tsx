import { useState, useEffect } from "react";
import axios from "axios";

interface GalleryItem {
  _id: string;
  category: string;
  alt: string;
  imageUrl: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const categories = ["All", "Bedroom", "Dining", "Common Area"];

  // Fetch gallery images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/gallery`);
        setImages(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (loading) return <p className="text-center py-10">Loading gallery...</p>;



  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

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
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeCategory === category
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
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${image.imageUrl}`}
                alt={image.alt}
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
