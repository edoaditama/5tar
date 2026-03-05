import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa6";

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
              . All Rights Reserved.
            </p>
            <p className="opacity-60 mt-2 text-sm">
              Created by{" "}
              <a
                href="https://www.instagram.com/edoaditamma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-amber-500 font-medium transition-all duration-300"
              >
                edoaditama
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 text-slate-100">
            {/* Discord */}
            <a
              href="https://discord.gg/VK3RTs6k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord community"
              className="hover:text-[#5865F2] transition-all duration-300 hover:-translate-y-1"
            >
              <FaDiscord size={28} />
            </a>
            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="hover:text-[#E4405F] transition-all duration-300 hover:-translate-y-1"
            >
              <FaInstagram size={28} />
            </a>

            {/* Github */}
            <a
              href="https://github.com/edoaditama?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View projects on GitHub"
              className="hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
