import { motion } from "framer-motion";

const members = [
  {
    id: 1,
    name: "Lucas G Luciano",
    role: "OOG",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Dico Ashraf",
    role: "OOG",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },

  {
    id: 3,
    name: "Dosmon Elstone",
    role: "OG",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Dayana Laurent",
    role: "OG",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 5,
    name: "Jane El Patron",
    role: "OG",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 6,
    name: "Lion D Woulverine",
    role: "OG",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 7,
    name: "Kazu Ryu",
    role: "OG",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 8,
    name: "Matt Yuu",
    role: "Shadow OG",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 9,
    name: "Kazu Ryu",
    role: "Hood President",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 10,
    name: "Kazu Ryu",
    role: "Hood President",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 11,
    name: "Kazu Ryu",
    role: "Hood President",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 12,
    name: "Kazu Ryu",
    role: "Money Books",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 13,
    name: "Kazu Ryu",
    role: "Money Books",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 14,
    name: "Kazu Ryu",
    role: "Money Books",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 15,
    name: "Kazu Ryu",
    role: "Money Books",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 16,
    name: "Kazu Ryu",
    role: "Punisher",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 17,
    name: "Kazu Ryu",
    role: "Punisher",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 18,
    name: "Kazu Ryu",
    role: "Punisher",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 p-4 bg-black text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold mb-2 tracking-tight">About 5TAR</h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 w-10 mt-3 bg-amber-600 mx-auto rounded-full"
        ></motion.div>
      </motion.div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-4 w-full max-w-4xl items-center justify-items-center">
        {members.map((member, index) => {
          const isHighlight = index < 2;

          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`
                card bg-zinc-900 overflow-hidden rounded-lg border border-zinc-800 
                hover:border-amber-500 transition-all duration-300 shadow-xl w-full
                ${
                  isHighlight
                    ? " col-span-1 lg:col-span-5 max-w-42 md:max-w-50"
                    : " col-span-1 lg:col-span-2 max-w-42 md:max-w-50"
                }
              `}
            >
              <figure className="aspect-square overflow-hidden bg-zinc-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>

              <div className="p-2 text-center">
                <h2 className="text-amber-500 italic font-black text-[10px] md:text-[12px] leading-tight uppercase">
                  {member.role}
                </h2>
                <p className="text-zinc-400 font-medium text-[8px] md:text-[9px] mt-0.5 truncate uppercase">
                  {member.name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
