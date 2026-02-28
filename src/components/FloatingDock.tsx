import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Linkedin, Github, FileText, MessageSquare, X } from 'lucide-react';

const dockItems = [
  { 
    icon: Mail, 
    label: 'Email', 
    href: 'mailto:Napat.tain@example.com',
    color: 'hover:text-[var(--color-primary)]'
  },
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://linkedin.com',
    color: 'hover:text-[var(--color-secondary)]'
  },
  { 
    icon: Phone, 
    label: 'Call', 
    href: 'tel:+66812345678',
    color: 'hover:text-[var(--color-primary)]'
  },
  {
    icon: FileText,
    label: 'Resume',
    href: '#', // In real app, link to PDF
    color: 'hover:text-[var(--color-secondary)]',
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      // Trigger download logic or scroll to hero
      const heroBtn = document.getElementById('download-resume-btn');
      if (heroBtn) heroBtn.click();
    }
  }
];

export default function FloatingDock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="flex flex-col items-center gap-2 p-2 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border border-[var(--color-border)] rounded-full shadow-lg shadow-black/5"
          >
            {dockItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={item.onClick}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-2 rounded-full text-[var(--color-text-secondary)] transition-colors relative group ${item.color}`}
                whileHover={{ scale: 1.2, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="w-4 h-4" />
                
                {/* Tooltip (Left side now) */}
                <span className="absolute top-1/2 -translate-y-1/2 right-full mr-3 px-2 py-1 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white flex items-center justify-center shadow-lg shadow-black/20 hover:opacity-90 transition-colors z-50"
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
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
