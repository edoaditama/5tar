import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import galleryData from "../data/gallery.json";
import { X } from "lucide-react";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Load More
  const ITEMS_PER_PAGE = 8;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleImages = useMemo(() => {
    return galleryData.slice(0, visibleCount);
  }, [visibleCount]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <section className="min-h-screen bg-black text-white py-25 px-4 md:px-8">
      {/* Header & Title  */}
      <div className="max-w-6xl mx-auto flex flex-col items-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Gallery <span className="text-amber-600">5TAR</span>
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-1.5 bg-amber-600 mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Grid Gallery */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img) => (
              <motion.div
                key={img.id}
                layoutId={`img-${img.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedImg(img)}
                className="cursor-pointer aspect-square bg-zinc-900 rounded-xl overflow-hidden relative border-2 border-zinc-800 hover:border-amber-600 transition-colors"
                whileHover={{ y: -5 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Button Load More */}
        {visibleCount < galleryData.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="btn btn-outline border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-black px-10 rounded-none font-bold italic transition-all duration-300"
            >
              SHOW MORE ({galleryData.length - visibleCount})
            </button>
          </div>
        )}
      </div>

      {/* Lightbox  */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              layoutId={`img-${selectedImg.id}`}
              src={selectedImg.src}
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain border-2 border-amber-600/20"
            />
            <button className="absolute top-6 right-6 text-white">
              <X size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
