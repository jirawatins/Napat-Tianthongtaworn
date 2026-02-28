import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceCard = ({ title, company, period, location, description, variants }: any) => (
  <motion.div
    variants={variants}
    className="relative pl-8 md:pl-12 pb-16 border-l-4 border-[var(--color-border)] last:border-0 group"
  >
    <div className="absolute -left-[14px] top-0 w-[24px] h-[24px] rounded-full bg-[var(--color-bg-secondary)] border-4 border-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)] transition-colors duration-300 shadow-sm" />

    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
      <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{title}</h3>
      <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span>
      <div className="text-lg font-bold text-[var(--color-primary)]">
        {company}
      </div>
    </div>

    <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-primary)] font-bold uppercase tracking-wider opacity-80">
      <span className="flex items-center gap-1.5 bg-[var(--color-bg-secondary)] px-3 py-1 rounded-full border border-[var(--color-border)] shadow-sm">
        <Calendar className="w-4 h-4 text-[var(--color-secondary)]" /> {period}
      </span>
      <span className="flex items-center gap-1.5 bg-[var(--color-bg-secondary)] px-3 py-1 rounded-full border border-[var(--color-border)] shadow-sm">
        <MapPin className="w-4 h-4 text-[var(--color-primary)]" /> {location}
      </span>
    </div>

    <p className="text-[var(--color-text-primary)] leading-relaxed max-w-3xl font-medium opacity-90 text-base md:text-lg">
      {description}
    </p>
  </motion.div>
);

export default function Experience() {
  return (
    <section className="py-32 bg-[var(--color-bg-secondary)] relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[80vw] h-[400px] bg-[var(--color-secondary)] transform rotate-12 translate-x-[20%] translate-y-[30%] z-0 opacity-20" />

      <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-secondary)] tracking-tight">
          Professional Journey
        </h2>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[var(--color-bg-primary)]/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-2 border-[var(--color-border)] shadow-lg"
        >
          <ExperienceCard
            title="Management & Operations"
            company="Major Pizza Franchise"
            period="2024 - Present"
            location="Bangkok, Thailand"
            description="Leading daily operations, managing staff schedules, and ensuring high standards of service and food quality. Implemented new inventory tracking systems reducing waste by 15%. Successfully managed crisis situations during peak hours, maintaining customer satisfaction scores above 90%."
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
          />

          <ExperienceCard
            title="Operations Intern"
            company="Local Hospitality Group"
            period="2023 - 2024"
            location="Chiang Rai, Thailand"
            description="Assisted in front-of-house management and event coordination. Gained hands-on experience in customer relationship management, conflict resolution, and team leadership in a fast-paced environment."
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
          />

          <ExperienceCard
            title="Business Administration Student"
            company="Chiang Rai Rajabhat University"
            period="2020 - 2024"
            location="Chiang Rai, Thailand"
            description="Focused on business management principles, marketing strategies, and organizational behavior. Led student council initiatives for campus events, developing early leadership and organizational skills."
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
