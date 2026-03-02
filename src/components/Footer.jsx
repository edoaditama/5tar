import { FaDiscord, FaSquareInstagram, FaYoutube } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-slate-400 border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Teks Copyright */}
          <div className="max-w-md mb-8">
            <p className="text-sm md:text-base font-light leading-relaxed tracking-wide">
              Copyright &copy; {currentYear}{" "}
              <span className="text-slate-100 font-bold cursor-pointer hover:text-amber-500 transition-colors duration-300">
                5TAR
              </span>
              . All Rights Reserved
            </p>
          </div>

          <div className="flex items-center justify-center gap-8 text-slate-100">
            {/* Instagram */}
            <a
              href=""
              className="hover:text-amber-600  transition-all duration-300 hover:-translate-y-1"
            >
              <FaSquareInstagram size={28} />
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/VK3RTs6k"
              className="hover:text-[#5865F2] transition-all duration-300 hover:-translate-y-1"
            >
              <FaDiscord size={28} />
            </a>

            {/* Youtube */}
            <a
              href=""
              className="hover:text-[#FF0000] transition-all duration-300 hover:-translate-y-1"
            >
              <FaYoutube className="text-[30px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
