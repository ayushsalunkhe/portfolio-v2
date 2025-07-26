import { useState, useRef, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import GlassCard from './GlassCard';

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    time: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (!form.current) return;

      // Add current time to the form data
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      // Update the hidden time input
      const timeInput = form.current.querySelector('input[name="time"]') as HTMLInputElement;
      if (timeInput) {
        timeInput.value = formattedTime;
      }

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '', time: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ayush.salunkhe7371@gmail.com',
      href: 'mailto:ayush.salunkhe7371@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 70581 43876',
      href: 'tel:+917058143876',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karjat, Maharashtra',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ayushsalunkhe',
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ayushsalunkhe',
      color: 'hover:text-blue-400',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/ayushsalunkhe',
      color: 'hover:text-sky-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 px-4">
          {/* Contact Form */}
          <GlassCard className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Send Message
            </h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <input type="hidden" name="time" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/60 dark:bg-white/10 border border-gray-300/50 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/60 dark:bg-white/10 border border-gray-300/50 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-white/60 dark:bg-white/10 border border-gray-300/50 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/60 dark:bg-white/10 border border-gray-300/50 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300 resize-none"
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg border flex items-center gap-3 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                      : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-violet-600 hover:to-pink-600 hover:shadow-violet-500/35'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <GlassCard className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <item.icon className="w-6 h-6 text-violet-500 dark:text-violet-400" />
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300">
                        {item.label}
                      </p>
                      <p className="text-gray-900 dark:text-white group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/60 dark:bg-white/10 rounded-full text-gray-800 dark:text-gray-200 transition-colors ${link.color}`}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Let's Work Together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Open to freelance opportunities and collaborations.
              </p>
            </GlassCard>

            <GlassCard className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Current Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Available for new projects starting next month.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
}
