import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/villa-teak-facade.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury coastal villa with premium composite cladding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative container-wide">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs font-light tracking-[0.3em] uppercase text-white/60 mb-8"
          >
            Engineered for Island Climates
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.05] tracking-tight mb-8"
          >
            Built to endure
            <br />
            <span className="italic text-white/90">sun, salt and sea.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl font-light text-white/70 mb-12 max-w-xl leading-relaxed"
          >
            Premium composite surfaces engineered for the unique demands of 
            island and coastal architecture—where intense UV, salt air, and 
            humidity test every material.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/samples"
              className="bg-white text-primary px-10 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              Request Samples
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-white/40 text-white px-10 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
