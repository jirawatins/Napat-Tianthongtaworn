import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Button from './ui/Button';
import { ArrowRight, X, Download } from 'lucide-react';

export default function Hero() {
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  const handleDownloadClick = () => {
    setShowResumeDialog(true);
  };

  const confirmDownload = () => {
    // In a real app, this would trigger the file download
    const link = document.createElement('a');
    link.href = '#'; // Placeholder for actual resume file
    link.download = 'Napat_Tianthongtaworn_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeDialog(false);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--color-bg-primary)] pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-[var(--color-primary)] rounded-bl-full z-0 opacity-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-[var(--color-secondary)] rounded-tr-full z-0 opacity-10" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto min-h-[80vh]">
        
        {/* Text Content - Higher Z-Index */}
        <div className="flex flex-col items-start text-left max-w-3xl lg:w-3/5 z-20 mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-bold tracking-widest uppercase border-2 border-[var(--color-secondary)]/20 shadow-sm">
              Operations & Business Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-black tracking-tighter mb-6 leading-[0.9] text-[var(--color-text-primary)] relative"
          >
            Napat <br />
            <span className="text-[var(--color-primary)]">Tianthongtaworn</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl text-lg sm:text-xl text-[var(--color-text-secondary)] mb-10 leading-relaxed font-medium"
          >
            Work hard in silence, let success make the noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              className="rounded-xl px-8 py-6 text-base font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all w-full sm:w-auto border-none"
              onClick={() => {
                const experienceSection = document.getElementById('experience');
                if (experienceSection) {
                  if (window.lenis) {
                    window.lenis.scrollTo(experienceSection, { offset: -80 });
                  } else {
                    experienceSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              View Experience <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              id="download-resume-btn"
              variant="outline" 
              size="lg" 
              className="rounded-xl px-8 py-6 text-base font-bold border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] hover:border-[var(--color-primary)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all w-full sm:w-auto"
              onClick={handleDownloadClick}
            >
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Image Content - Positioned alongside or slightly behind on desktop */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full lg:absolute lg:right-0 lg:bottom-0 lg:w-[45%] lg:max-w-[600px] z-10 mt-16 lg:mt-0 flex justify-center lg:justify-end pointer-events-none"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-10 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] bg-[var(--color-secondary)] rounded-t-full opacity-20 blur-2xl -z-10"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop" 
            alt="Napat Tianthongtaworn" 
            className="w-full max-w-[350px] sm:max-w-[450px] lg:max-w-none h-auto object-contain object-bottom drop-shadow-2xl pointer-events-auto rounded-[2rem] lg:rounded-none"
            style={{
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div> */}

      </div>

      {/* Resume Download Confirmation Dialog */}
      <AnimatePresence>
        {showResumeDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowResumeDialog(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[var(--color-bg-primary)] rounded-3xl shadow-2xl w-full max-w-md p-8 border-2 border-[var(--color-border)] z-10"
            >
              <button 
                onClick={() => setShowResumeDialog(false)}
                className="absolute top-4 right-4 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors p-2 bg-[var(--color-bg-secondary)] rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mb-6 border-2 border-[var(--color-primary)]/20">
                  <Download className="w-10 h-10 text-[var(--color-primary)]" />
                </div>
                
                <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-3">Download Resume?</h3>
                <p className="text-[var(--color-text-secondary)] mb-8 font-medium leading-relaxed">
                  Are you sure you want to download the resume PDF? This file contains detailed professional history and contact information.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-xl py-4 font-bold border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
                    onClick={() => setShowResumeDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="flex-1 rounded-xl py-4 font-bold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 border-none"
                    onClick={confirmDownload}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
