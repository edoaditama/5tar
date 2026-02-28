import { motion } from "framer-motion";
import { members } from "../data/members";
import { MemberCard } from "../components/MemberCard";

function About() {
  const mainMembers = members.filter((m) => m.main);
  const otherMembers = members.filter((m) => !m.main);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
            About <span className="text-amber-600">5TAR</span>
          </h1>
          <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ duration: 0.5, delay: 0.5 }}
            className="h-1 w-12 bg-amber-600 mx-auto mt-2 rounded-full"
          />
        </motion.header>

        {/* First Row: Main Members (2 Columns) */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12 justify-center">
          {mainMembers.map((member) => (
            <MemberCard key={member.id} member={member} isMain={true} />
          ))}
        </div>

        {/* Second Row: Other Members (Scrollable on Mobile) */}
        <div className="w-full">
          <div
            className="
            flex lg:grid lg:grid-cols-5 gap-4 
            overflow-x-auto lg:overflow-visible 
            pb-8 lg:pb-0 px-2 no-scrollbar 
            justify-start lg:justify-items-center
          "
          >
            {otherMembers.map((member) => (
              <MemberCard key={member.id} member={member} isMain={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
