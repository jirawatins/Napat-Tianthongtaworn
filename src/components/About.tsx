import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, TrendingUp } from 'lucide-react';

const BentoCard = ({ title, subtitle, icon: Icon, className, children, variants }: any) => (
  <motion.div
    variants={variants}
    whileHover={{
      y: -5,
      scale: 1.01,
      boxShadow: "0 20px 40px -15px rgba(203, 150, 196, 0.3)"
    }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className={`bg-[var(--color-bg-secondary)] p-8 rounded-2xl border-2 border-[var(--color-border)] flex flex-col justify-between cursor-default hover:border-[var(--color-primary)] transition-colors ${className}`}
  >
    <div className="flex items-start justify-between mb-6">
      <div className="p-3.5 bg-[var(--color-primary)]/10 rounded-xl border border-[var(--color-primary)]/20 shadow-sm group-hover:bg-[var(--color-primary)] transition-colors group">
        <Icon className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
      </div>
      {subtitle && <span className="px-3 py-1 rounded-full bg-[var(--color-primary)] text-xs text-white uppercase tracking-wider font-bold">{subtitle}</span>}
    </div>
    <div>
      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 tracking-tight">{title}</h3>
      <div className="text-[var(--color-text-primary)] opacity-80 text-base leading-relaxed font-medium">
        {children}
      </div>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <section className="py-32 bg-[var(--color-bg-primary)] relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 bg-dots-secondary opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[300px] bg-[var(--color-primary)] transform -skew-y-2 origin-top-left z-0 opacity-10" />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)] tracking-tight">
          About me
        </h2>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(240px,auto)]"
        >
          {/* Education 1 */}
          <BentoCard
            title="B.B.A. Management"
            subtitle="2024"
            icon={GraduationCap}
            className="md:col-span-2 shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <p className="font-bold mb-2 text-[var(--color-primary)] text-lg">Chiang Rai Rajabhat University</p>
            <p>Specialized in strategic management, organizational behavior, and business ethics. Graduated with honors.</p>
          </BentoCard>

          {/* Education 2 */}
          <BentoCard
            title="Business Tech"
            subtitle="High Voc. Cert."
            icon={Award}
            className="md:col-span-1 shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <p className="font-bold mb-2 text-[var(--color-primary)] text-lg">SBAC Nonthaburi</p>
            <p>Modern business technology & admin.</p>
          </BentoCard>

          {/* Experience Highlight */}
          <BentoCard
            title="Operational Excellence"
            subtitle="Current Role"
            icon={Briefcase}
            className="md:col-span-1 bg-[var(--color-secondary)]/10 border-[var(--color-secondary)] shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <p className="font-bold mb-2 text-[var(--color-secondary)] text-lg">Major Pizza Franchise</p>
            <p>Optimizing workflows, reducing waste, and leading high-performance teams.</p>
          </BentoCard>

          {/* Philosophy */}
          <BentoCard
            title="Management Philosophy"
            subtitle="Approach"
            icon={TrendingUp}
            className="md:col-span-2 shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <p className="italic mb-4 text-[var(--color-primary)] text-lg font-bold">"Efficiency isn't just about speed; it's about precision and adaptability."</p>
            <p>I believe in data-driven decision making combined with empathetic leadership to drive sustainable growth in fast-paced environments.</p>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}
