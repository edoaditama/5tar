import { motion, AnimatePresence } from "framer-motion";
import members from "../data/members.json";
import { MemberCard } from "../components/MemberCard";
import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";

function About() {
  const ITEMS_PER_PAGE = 10;
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Filter & Search
  const mainMembers = useMemo(() => members.filter((m) => m.main), []);

  const filteredOtherMembers = useMemo(() => {
    return members
      .filter((m) => !m.main)
      .filter(
        (m) =>
          m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.role.toLowerCase().includes(searchTerm.toLowerCase()),
      );
  }, [searchTerm]);

  // Data yang ditampilkan Load More
  const visibleMembers = filteredOtherMembers.slice(0, visibleCount);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter"
          >
            About <span className="text-amber-600">5TAR</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1.5 bg-amber-600 mx-auto mt-4 rounded-full"
          />
        </header>

        {/* Input Search */}
        <div className="w-full max-w-md mb-16 px-4">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search for member name or role..."
              className="input input-bordered w-full bg-zinc-900 border-amber-600/30 focus:border-amber-600 text-white pl-12 transition-all duration-300 shadow-lg focus:shadow-amber-600/10"
              value={searchTerm}
              onChange={handleSearch}
            />
            {/*Icons Search*/}
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-600 transition-transform group-focus-within:scale-110" />
          </div>
        </div>

        {/* Main Members  */}
        {!searchTerm && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-20 w-full max-w-3xl mx-auto justify-items-center px-4">
            {mainMembers.map((member) => (
              <MemberCard key={member.id} member={member} isMain={true} />
            ))}
          </div>
        )}

        {/* Other Members / Search Results */}
        <div className="w-full">
          <h2 className="text-xl font-bold mb-8 text-center uppercase tracking-[0.3em] text-zinc-500">
            {searchTerm ? `Search Results: ${filteredOtherMembers.length}` : " All Members"}
          </h2>

          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center"
          >
            <AnimatePresence mode="popLayout">
              {visibleMembers.map((member) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <MemberCard member={member} isMain={false} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pesan Tidak Ditemukan */}
          {filteredOtherMembers.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-zinc-500 py-20"
            >
              Member Not Found...
            </motion.p>
          )}

          {/* Tombol Load More */}
          {!searchTerm && visibleCount < filteredOtherMembers.length && (
            <div className="flex justify-center mt-16">
              <button
                onClick={loadMore}
                className="btn btn-outline border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-black px-10 rounded-none italic font-bold transition-all duration-300"
              >
                SHOW MORE ({filteredOtherMembers.length - visibleCount})
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
