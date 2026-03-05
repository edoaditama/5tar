import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo5tar from "../assets/logo.png";

function Hero() {
  const [isEnglish, setIsEnglish] = useState(true);

  const content = {
    en: {
      title: "Welcome To 5TAR",
      body: 'Starting as five taxi drivers battling poverty and economic strain, Gank 5TAR evolved from a simple support group for their fellow drivers into an ambitious criminal syndicate. The solidarity forged behind the wheel became a potent weapon as they leveraged their street smarts and access to information to delve into the criminal underworld—everything from smuggling to contract killings.\n\nToday, they have transformed into a cunning and highly organized mafia. Driven by a deep-seated resentment against the system that marginalized them, Gank 5TAR aims to rule the city from the shadows, proving that even the "lower class" is capable of seizing ultimate controll.',
      button: "Join 5TAR",
    },
    id: {
      title: "Selamat Datang di 5TAR",
      body: 'Bermula dari lima sopir taksi yang berjuang melawan kemiskinan dan tekanan ekonomi, Gank 5TAR tumbuh dari sekadar kelompok pelindung sesama sopir menjadi sindikat kriminal yang ambisius. Solidaritas di balik kemudi berubah menjadi kekuatan saat mereka memanfaatkan akses jalanan dan informasi untuk merambah dunia gelap—mulai dari penyelundupan hingga pembunuhan bayaran.\n\nKini, mereka bertransformasi menjadi organisasi mafia yang licik dan terorganisir. Didorong oleh rasa dendam terhadap sistem yang meminggirkan mereka, Gank 5TAR bertujuan menguasai kota dari bayang-bayang sebagai bentuk pembuktian bahwa "kelas bawah" pun mampu memegang kendali tertinggi.',
      button: "Gabung 5TAR",
    },
  };

  return (
    <div className="hero min-h-screen bg-black overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12 px-6 py-12">
        {/* LOGO  */}
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
            className="w-48 md:w-64 lg:w-80 xl:w-96 rounded-lg object-contain"
            alt="Logo 5TAR"
          />
        </motion.div>

        {/* CONTAINER TEKS */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* TOGGLE BAHASA */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
          >
            <span
              className={`text-xs font-bold ${!isEnglish ? "text-primary" : "text-gray-500"}`}
            >
              ID
            </span>
            <input
              type="checkbox"
              className="toggle toggle-sm md:toggle-md toggle-primary border-gray-600"
              checked={isEnglish}
              onChange={() => setIsEnglish(!isEnglish)}
            />
            <span
              className={`text-xs font-bold ${isEnglish ? "text-primary" : "text-gray-500"}`}
            >
              EN
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isEnglish ? "en" : "id"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white">
                {isEnglish ? content.en.title : content.id.title}
              </h1>

              <p className="py-6 text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed max-w-prose mx-auto lg:mx-0">
                {isEnglish ? content.en.body : content.id.body}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* BUTTON ) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href="https://discord.gg/gRhe3daJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-wide md:btn-md shadow-lg hover:scale-105 transition-transform"
            >
              {isEnglish ? content.en.button : content.id.button}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
