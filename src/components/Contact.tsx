import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const newErrors = { ...errors };

    if (id === 'name' && !value.trim()) {
      newErrors.name = 'Name is required';
    } else if (id === 'name') {
      delete newErrors.name;
    }

    if (id === 'email') {
      if (!value.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        delete newErrors.email;
      }
    }

    if (id === 'message' && !value.trim()) {
      newErrors.message = 'Message is required';
    } else if (id === 'message') {
      delete newErrors.message;
    }

    setErrors(newErrors);
  };

  return (
    <section className="py-32 bg-[var(--color-bg-secondary)] relative border-t border-[var(--color-border)] overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)] rounded-tl-full z-0 opacity-10" />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)] tracking-tight">
          Connect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  staggerChildren: 0.1,
                  duration: 0.5
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="space-y-8">
              <motion.div
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="flex items-start gap-5 group"
              >
                <div className="p-4 bg-[var(--color-bg-primary)] rounded-2xl border-2 border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors shadow-sm">
                  <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">Email</h3>
                  <p className="text-[var(--color-text-primary)] opacity-80 text-lg font-medium">Napat.tian@example.com</p>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="flex items-start gap-5 group"
              >
                <div className="p-4 bg-[var(--color-bg-primary)] rounded-2xl border-2 border-[var(--color-border)] group-hover:border-[var(--color-secondary)] transition-colors shadow-sm">
                  <Phone className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">Phone</h3>
                  <p className="text-[var(--color-text-primary)] opacity-80 text-lg font-medium">+66 81 234 5678</p>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="flex items-start gap-5 group"
              >
                <div className="p-4 bg-[var(--color-bg-primary)] rounded-2xl border-2 border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors shadow-sm">
                  <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">Location</h3>
                  <p className="text-[var(--color-text-primary)] opacity-80 text-lg font-medium">Bangkok, Thailand</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="pt-8 border-t-2 border-[var(--color-border)]"
            >
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-6">Social Profiles</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="rounded-full w-14 h-14 p-0 flex items-center justify-center border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] hover:scale-110 transition-all shadow-sm">
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full w-14 h-14 p-0 flex items-center justify-center border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-secondary)] hover:text-white hover:border-[var(--color-secondary)] hover:scale-110 transition-all shadow-sm">
                  <Github className="w-6 h-6" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6 bg-[var(--color-bg-primary)] p-8 md:p-10 rounded-3xl border-2 border-[var(--color-border)] relative overflow-hidden shadow-lg"
            onSubmit={handleSubmit}
            noValidate
          >
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute inset-0 z-10 bg-[var(--color-bg-secondary)] flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-16 h-16 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[var(--color-secondary)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Message Sent!</h3>
                  <p className="text-[var(--color-text-secondary)]">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <Button
                    variant="outline"
                    className="mt-6 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-primary)]"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[var(--color-text-primary)] mb-2 uppercase tracking-wider text-xs">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-[var(--color-bg-secondary)] border-2 rounded-xl px-5 py-4 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors shadow-sm ${errors.name ? 'border-red-500' : 'border-[var(--color-border)]'}`}
                placeholder="Your Name"
              />
              {errors.name && (
                <div className="flex items-center gap-1 mt-2 text-red-500 text-xs font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[var(--color-text-primary)] mb-2 uppercase tracking-wider text-xs">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-[var(--color-bg-secondary)] border-2 rounded-xl px-5 py-4 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors shadow-sm ${errors.email ? 'border-red-500' : 'border-[var(--color-border)]'}`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <div className="flex items-center gap-1 mt-2 text-red-500 text-xs font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-[var(--color-text-primary)] mb-2 uppercase tracking-wider text-xs">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-[var(--color-bg-secondary)] border-2 rounded-xl px-5 py-4 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors shadow-sm resize-none ${errors.message ? 'border-red-500' : 'border-[var(--color-border)]'}`}
                placeholder="How can I help you?"
              ></textarea>
              {errors.message && (
                <div className="flex items-center gap-1 mt-2 text-red-500 text-xs font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.message}</span>
                </div>
              )}
            </div>

            <Button
              className="w-full relative bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 rounded-xl py-6 text-base font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
