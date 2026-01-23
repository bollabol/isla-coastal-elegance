import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Mail, ArrowUpRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll respond within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-secondary">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            Contact & Partnerships
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] max-w-4xl mb-8"
          >
            Let's discuss
            <br />
            <span className="italic">your project</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl leading-relaxed"
          >
            Whether you're specifying materials, developing a property, or exploring 
            a partnership, we're here to support your vision.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="space-y-12">
                <div>
                  <h3 className="font-serif text-xl mb-4">Studio</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      Carrer de Sant Miquel, 12
                      <br />
                      07800 Ibiza, Spain
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl mb-4">Email</h3>
                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <a
                      href="mailto:studio@islawoodcomposite.com"
                      className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors inline-flex items-center gap-2"
                    >
                      studio@islawoodcomposite.com
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-serif text-xl mb-4">Regions</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    We supply projects throughout Europe, the Mediterranean, 
                    and the Middle East.
                  </p>
                  <p className="text-xs font-light tracking-wide text-muted-foreground/70 mt-4">
                    Ibiza · Mallorca · Mykonos · Algarve · Dubai
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-serif text-xl mb-4">Partnerships</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    We work with architects, developers, and contractors who 
                    share our commitment to quality. Contact us to discuss 
                    trade accounts and project partnerships.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="bg-secondary p-10 md:p-14">
                <h2 className="font-serif text-3xl font-light tracking-tight mb-8">
                  Send a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-border bg-background text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-border bg-background text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                        Company / Studio
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-border bg-background text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                        Role
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-border bg-background text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                      >
                        <option value="">Select...</option>
                        <option value="architect">Architect</option>
                        <option value="developer">Developer</option>
                        <option value="contractor">Contractor</option>
                        <option value="designer">Designer</option>
                        <option value="owner">Property Owner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-border bg-background text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                    >
                      <option value="">Select a topic...</option>
                      <option value="project">Project Inquiry</option>
                      <option value="specification">Material Specification</option>
                      <option value="samples">Sample Request</option>
                      <option value="partnership">Trade Partnership</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-4 border border-border bg-background text-foreground focus:outline-none focus:border-accent transition-colors resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-primary-foreground px-10 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
