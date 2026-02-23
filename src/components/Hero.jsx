import { useState } from "react";
import logo5tar from "../assets/logo.png";

function Hero() {
  const [isEnglish, setIsEnglish] = useState(true);

  const content = {
    en: {
      title: "Welcome To 5TAR",
      body: "Gank 5TAR was forged on the unforgiving asphalt, born from five destitute taxi drivers who were fed up with being oppressed by terminal thugs and corporate monopolies. What began as a pact of solidarity behind the wheel evolved into a movement. The name 5TAR stands as a symbol for its five founders, who swore to claw their way from the 'lower class' to the absolute pinnacle of power. By exploiting a web of backalleys and harvesting secrets from high-profile passengers, their ambitions grew wild. Today, Gank 5TAR has transformed into a feared syndicate—masterminding everything from money laundering to contract killings with ruthless precision.",
    },
    id: {
      title: "Selamat Datang di 5TAR",
      body: "Gank 5TAR lahir dari kerasnya aspal kota, bermula dari lima sopir taksi melarat yang muak ditindas oleh preman terminal dan monopoli perusahaan besar. Berawal dari aksi solidaritas untuk saling melindungi di balik kemudi, nama 5TAR menjadi simbol bagi lima pendiri yang bersumpah untuk mengangkat derajat mereka dari 'kelas bawah' menuju puncak kekuasaan. Memanfaatkan jaringan jalur tikus dan informasi rahasia dari para penumpang penting, ambisi mereka berkembang liar. Kini, Gank 5TAR telah bertransformasi menjadi sindikat yang ditakuti—mengelola pencucian uang hingga pembunuhan berbayar dengan strategi licik.",
    },
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      {/* Hero Content  */}
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12 px-6 py-12">
        {/* Container Gambar */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src={logo5tar}
            className="w-48 md:w-64 lg:w-80 xl:w-96 rounded-lg drop-shadow-2xl animate-pulse-slow"
            alt="Logo 5TAR"
          />
        </div>

        {/* Container Teks */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Toggle Switch */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
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
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
            {isEnglish ? content.en.title : content.id.title}
          </h1>

          <p className="py-6 text-sm md:text-base lg:text-lg text-gray-500 text-center lg:text-left leading-relaxed">
            {isEnglish ? content.en.body : content.id.body}
          </p>

          <button className="btn btn-primary btn-wide md:btn-md shadow-lg">
            {isEnglish ? "Join The Syndicate" : "Gabung Sindikat"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
