import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -80 });
      } else {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled 
            ? 'bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)] py-4 shadow-sm' 
            : 'bg-transparent py-6'
        )}
      >
        <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
          <a 
            href="#hero" 
            className="relative z-50 text-2xl font-bold text-[var(--color-primary)] tracking-tighter flex items-center gap-1"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            <span>N</span>
            <span className="text-[var(--color-secondary)]">.</span>
            <span>T</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={cn(
                        "text-sm font-bold transition-colors relative group py-2",
                        isActive ? "text-[var(--color-primary)]" : "text-[var(--color-text-primary)] opacity-70 hover:opacity-100"
                      )}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                      <span className={cn(
                        "absolute -bottom-0 left-0 h-1 bg-[var(--color-secondary)] transition-all duration-300 rounded-full",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )} />
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="pl-6 border-l border-[var(--color-border)] flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden relative z-50">
            <ThemeToggle />
            <button
              className="text-[var(--color-text-primary)] p-2 hover:bg-[var(--color-bg-secondary)] rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <nav className="w-full max-w-sm px-6">
              <ul className="flex flex-col gap-6 items-center">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                      className="w-full"
                    >
                      <a
                        href={item.href}
                        className={cn(
                          "block text-3xl font-bold text-center py-2 transition-colors",
                          isActive 
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" 
                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                        )}
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            
            {/* Decorative background elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
