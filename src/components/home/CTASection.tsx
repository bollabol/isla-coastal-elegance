import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-28 md:py-40 bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-light tracking-[0.3em] uppercase text-primary-foreground/50 mb-6"
          >
            Begin Your Project
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] mb-8"
          >
            Let's create something
            <br />
            <span className="italic">enduring</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-light text-primary-foreground/60 mb-12 leading-relaxed"
          >
            We partner with architects, developers, and discerning clients 
            to specify surfaces that elevate coastal architecture.
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
              className="bg-accent text-accent-foreground px-10 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/90 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              Request Sample Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-primary-foreground/30 text-primary-foreground px-10 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-primary-foreground/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
