import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import textureDecking from "@/assets/texture-decking.jpg";

export const MaterialsPreviewSection = () => {
  return (
    <section className="section-padding bg-warm">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="label-uppercase mb-4">Our Materials</p>
            <h2 className="heading-section mb-6">
              Crafted for the most demanding environments
            </h2>
            <p className="body-large mb-8">
              Our wood composite materials combine the natural beauty of timber
              with advanced engineering. Perfect for facades, terraces, and
              outdoor spaces in coastal and island locations.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "UV-resistant color technology",
                "Slip-resistant surface finish",
                "Hidden fastening systems",
                "25-year performance warranty",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/materials"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Explore Materials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={textureDecking}
              alt="Premium wood composite texture"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 max-w-xs hidden lg:block">
              <p className="text-2xl font-serif mb-1">25+</p>
              <p className="text-sm font-light opacity-90">
                Years of guaranteed performance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
