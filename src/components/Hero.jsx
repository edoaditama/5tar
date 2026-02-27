import { useState } from "react";
import { motion } from "framer-motion"; // Pastikan import ini ada
import logo5tar from "../assets/logo.png";

function Hero() {
  const [isEnglish, setIsEnglish] = useState(true);

  const content = {
    en: {
      title: "Welcome To 5TAR",
      body: "Gank 5TAR was forged on the unforgiving asphalt, born from five destitute taxi drivers who were fed up with being oppressed by terminal thugs and corporate monopolies. The name 5TAR stands as a symbol for its five founders, who swore to claw their way from the 'lower class' to the absolute pinnacle of power.",
      button: "Join The Syndicate",
    },
    id: {
      title: "Selamat Datang di 5TAR",
      body: "Gank 5TAR lahir dari kerasnya aspal kota, bermula dari lima sopir taksi yang muak ditindas oleh preman terminal dan monopoli perusahaan besar. Nama 5TAR menjadi simbol bagi lima pendiri yang bersumpah untuk mengangkat derajat mereka dari 'kelas bawah' menuju puncak kekuasaan.",
      button: "Gabung Sindikat",
    },
  };

  return (
    <div className="hero min-h-screen bg-black overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12 px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center w-full lg:w-1/2"
        >
          <motion.img
            src={logo5tar}
            animate={{
              filter: [
                "drop-shadow(0 0 0px #fff)",
                "drop-shadow(0 0 20px #fff)",
                "drop-shadow(0 0 0px #fff)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 md:w-64 lg:w-80 xl:w-96 rounded-lg"
            alt="Logo 5TAR"
          />
        </motion.div>

        {/* CONTAINER TEKS */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* ANIMASI TOGGLE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
          >
            <span
              className={`text-xs font-bold ${!isEnglish ? "text-primary" : "text-gray-400"}`}
            >
              ID
            </span>
            <input
              type="checkbox"
              className="toggle toggle-sm md:toggle-md toggle-primary"
              checked={isEnglish}
              onChange={() => setIsEnglish(!isEnglish)}
            />
            <span
              className={`text-xs font-bold ${isEnglish ? "text-primary" : "text-gray-400"}`}
            >
              EN
            </span>
          </motion.div>

          {/* ANIMASI JUDUL */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white"
          >
            {isEnglish ? content.en.title : content.id.title}
          </motion.h1>

          {/* ANIMASI BODY */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="py-6 text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed max-w-prose mx-auto lg:mx-0"
          >
            {isEnglish ? content.en.body : content.id.body}
          </motion.p>

          {/* ANIMASI BUTTON*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button className="btn btn-primary btn-wide md:btn-md shadow-lg hover:scale-105 transition-transform">
              {isEnglish ? content.en.button : content.id.button}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
