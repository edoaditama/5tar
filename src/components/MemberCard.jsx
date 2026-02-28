import { motion } from "framer-motion";

export const MemberCard = ({ member, isMain }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`
      flex-none bg-zinc-900 rounded-xl border border-zinc-800 
      hover:border-amber-500 transition-all duration-300 overflow-hidden
      ${isMain ? "w-35 md:w-45" : "w-27.5 md:w-35 lg:w-full lg:max-w-37.5"}
    `}
  >
    <div className="aspect-square bg-zinc-800">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-3 text-center">
      <h2 className="text-amber-500 italic font-black text-[12px] uppercase truncate">
        {member.role}
      </h2>
      <p className="text-zinc-400 font-medium text-[10px] mt-0.5 truncate uppercase">
        {member.name}
      </p>
    </div>
  </motion.div>
);
