import { motion } from "framer-motion";
import { members } from "../data/members";
import { MemberCard } from "../components/MemberCard";

function About() {
  const mainMembers = members.filter((m) => m.main);
  const otherMembers = members.filter((m) => !m.main);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
            About <span className="text-amber-600">5TAR</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-1.5 bg-amber-600 mx-auto mt-4 rounded-full "
          />
        </motion.header>

        {/* Row 1: Main Members  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-20 w-full max-w-3xl mx-auto justify-items-center px-4">
          {mainMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full flex justify-center"
            >
              <MemberCard member={member} isMain={true} />
            </motion.div>
          ))}
        </div>

        {/* Row 2: Other Members  */}
        <div className="w-full ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center"
          >
            {otherMembers.map((member) => (
              <motion.div key={member.id} variants={itemVariants}>
                <MemberCard member={member} isMain={false} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
