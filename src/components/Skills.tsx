import { motion } from 'motion/react';

const skills = [
  { category: "Core Skills", items: ["Operational Excellence", "Crisis Management", "Team Leadership", "System Optimization", "Strategic Planning", "Process Improvement"] },
  { category: "Technical", items: ["Data Analytics", "Inventory Management", "POS Systems", "Financial Reporting", "Microsoft Office Suite", "CRM Software"] },
  { category: "Soft Skills", items: ["Communication", "Problem Solving", "Adaptability", "Customer Focus", "Emotional Intelligence", "Time Management"] }
];

export default function Skills() {
  return (
    <section className="py-32 bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 bg-dots-secondary opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-[200px] bg-[var(--color-primary)] transform skew-y-3 origin-bottom-right z-0 opacity-10" />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)] tracking-tight">
          Skills
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {skills.map((group, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="bg-[var(--color-bg-secondary)] p-8 rounded-2xl border-2 border-[var(--color-border)] shadow-sm hover:border-[var(--color-secondary)] transition-colors"
            >
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 pb-4 border-b-2 border-[var(--color-border)] relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-16 after:h-[4px] after:bg-[var(--color-secondary)] after:rounded-full">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 rounded-full bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] text-sm font-bold border-2 border-[var(--color-border)] cursor-default transition-all"
                    whileHover={{
                      y: -2,
                      backgroundColor: "var(--color-secondary)",
                      color: "#ffffff",
                      borderColor: "var(--color-secondary)"
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
