import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { X } from "lucide-react";

const images = [
  { id: 1, src: "./src/assets/1.jpg", alt: "image 1" },
  { id: 2, src: "./src/assets/2.png", alt: "image 2" },
  { id: 3, src: "./src/assets/3.png", alt: "image 3" },
  { id: 4, src: "./src/assets/4.png", alt: "image 4" },
  { id: 5, src: "./src/assets/5.png", alt: "image 5" },
  { id: 6, src: "./src/assets/6.png", alt: "image 6" },
  { id: 7, src: "./src/assets/7.png", alt: "image 7" },
  { id: 8, src: "./src/assets/8.png", alt: "image 8" },
  { id: 9, src: "./src/assets/9.png", alt: "image 9" },
  { id: 10, src: "./src/assets/10.jpg", alt: "image 10" },
  { id: 11, src: "./src/assets/11.png", alt: "image 11" },
  { id: 12, src: "./src/assets/12.png", alt: "image 12" },
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
            Gallery <span className="text-amber-600">5TAR</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-1.5 bg-amber-600 mx-auto mt-4 rounded-full"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 w-full min-h-screen">
        {images.map((img) => (
          <motion.div
            key={img.id}
            layoutId={`img-${img.id}`}
            onClick={() => setSelectedImg(img)}
            className="cursor-pointer aspect-square group bg-zinc-800 rounded-xl md:rounded-2xl shadow-xl border-2 md:border-4 border-white hover:border-amber-500 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              className="absolute top-6 right-6 p-2 text-white hover:text-amber-500 transition-colors z-60"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              <X size={36} className="drop-shadow-lg" />
            </motion.button>

            <motion.img
              layoutId={`img-${selectedImg.id}`}
              src={selectedImg.src}
              alt="Selected View"
              className="max-w-full max-h-[75vh] md:max-h-[85vh] rounded-lg shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
