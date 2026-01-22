import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="label-uppercase text-primary-foreground/50 mb-4"
        >
          Start Your Project
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-section mb-6"
        >
          Ready to transform your vision?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-large text-primary-foreground/70 max-w-2xl mx-auto mb-10"
        >
          Whether you're an architect, developer, or private client, we're here
          to help you create exceptional outdoor spaces.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/samples"
            className="bg-accent text-accent-foreground px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-accent/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Request Sample Kit
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button className="bg-transparent border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-primary-foreground/10 transition-all duration-300 inline-flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Download Brochure
          </button>
        </motion.div>
      </div>
    </section>
  );
};
