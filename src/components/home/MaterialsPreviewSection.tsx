import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import textureDecking from "@/assets/texture-decking.jpg";

const applications = [
  {
    title: "Facade Cladding",
    description: "Weather-resistant exterior systems that define architectural character for decades.",
  },
  {
    title: "Terrace Decking",
    description: "Barefoot-comfortable surfaces engineered to resist sun, salt, and heavy use.",
  },
  {
    title: "Pool Surrounds",
    description: "Slip-resistant, cool-touch surfaces that thrive in chlorine and saltwater environments.",
  },
  {
    title: "Outdoor Living",
    description: "Pergolas, screens, and bespoke elements designed for coastal longevity.",
  },
];

export const MaterialsPreviewSection = () => {
  return (
    <section className="py-28 md:py-40 bg-secondary">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <img
              src={textureDecking}
              alt="Premium wood composite texture engineered for island climates"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-8 hidden lg:block">
              <p className="font-serif text-3xl mb-1">25+</p>
              <p className="text-xs font-light tracking-wide uppercase text-accent-foreground/80">
                Year Warranty
              </p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Architecture & Applications
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-[1.15] mb-8">
              Surfaces that outlast
              <br />
              the seasons
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-12">
              Our materials are specified by architects who understand that island 
              architecture demands more than aesthetics. Every surface is engineered 
              to perform flawlessly under intense UV, salt exposure, and tropical 
              humidity—year after year, decade after decade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {applications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="font-serif text-lg mb-2">{app.title}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {app.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              to="/materials"
              className="inline-flex items-center gap-3 text-sm font-light text-foreground hover:text-accent transition-colors group"
            >
              Explore materials
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
