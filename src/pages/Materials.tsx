import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Shield, Sun, Droplets } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import projectFacade from "@/assets/project-facade.jpg";
import projectTerrace from "@/assets/project-terrace.jpg";
import projectPool from "@/assets/project-pool.jpg";
import textureDecking from "@/assets/texture-decking.jpg";

const architecturalSystems = [
  {
    id: "facades",
    name: "Facade Cladding",
    subtitle: "Architectural Identity",
    description:
      "Exterior surfaces that define architectural character while enduring decades of coastal exposure. Our facade systems combine visual warmth with uncompromising weather resistance.",
    features: [
      "UV-stable pigmentation prevents fading",
      "Salt and humidity resistant core",
      "Hidden fixing systems for clean lines",
      "Available in custom dimensions",
    ],
    image: projectFacade,
  },
  {
    id: "terraces",
    name: "Terrace Decking",
    subtitle: "Living Surfaces",
    description:
      "Barefoot-comfortable surfaces engineered for intensive use. From rooftop terraces to poolside lounges, our decking delivers lasting beauty without maintenance demands.",
    features: [
      "Splinter-free and barefoot safe",
      "Slip-resistant surface texture",
      "Zero moisture absorption",
      "15-year structural warranty",
    ],
    image: projectTerrace,
  },
  {
    id: "pools",
    name: "Pool Surrounds",
    subtitle: "Water's Edge",
    description:
      "Surfaces designed specifically for pool environments. Cool underfoot, resistant to chlorine and saltwater, and engineered for wet conditions.",
    features: [
      "Cool-touch surface technology",
      "Chlorine and saltwater resistant",
      "Enhanced drainage capability",
      "Anti-slip certification",
    ],
    image: projectPool,
  },
  {
    id: "louvres",
    name: "Louvre Systems",
    subtitle: "Light & Shadow",
    description:
      "Vertical and horizontal composite louvres that shape light, shadow, and rhythm across facades and outdoor structures. Architectural elements that transform spaces while providing privacy and climate control.",
    features: [
      "Precision-engineered profiles",
      "Fixed or adjustable configurations",
      "Integrated mounting systems",
      "Custom spacing and dimensions",
    ],
    image: textureDecking,
  },
];

const materialQualities = [
  {
    icon: Layers,
    title: "Composite Core",
    description: "Advanced polymer-wood matrix engineered for structural integrity and dimensional stability.",
  },
  {
    icon: Shield,
    title: "Protected Surface",
    description: "Multi-layer shield technology guards against scratches, stains, and environmental damage.",
  },
  {
    icon: Sun,
    title: "UV Stability",
    description: "Color-locked pigmentation maintains original appearance under intense solar exposure.",
  },
  {
    icon: Droplets,
    title: "Moisture Immunity",
    description: "Zero water absorption eliminates swelling, warping, and organic decay permanently.",
  },
];

const finishes = [
  { name: "Natural Oak", color: "#C4A77D" },
  { name: "Warm Teak", color: "#B08968" },
  { name: "Charcoal", color: "#4A4A4A" },
  { name: "Stone Grey", color: "#8B8B8B" },
  { name: "Dark Walnut", color: "#5D4E37" },
  { name: "Sand", color: "#D4C4A8" },
];

const Materials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-20 md:pb-28 bg-background">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            Materials & Systems
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8 max-w-4xl"
          >
            Architectural surfaces
            <br />
            <span className="italic text-accent">engineered for island climates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground font-light text-lg leading-relaxed max-w-2xl"
          >
            From facade cladding to pool surrounds, our comprehensive material systems 
            provide architects and developers with complete solutions for luxury coastal 
            architecture. Every surface engineered for decades of performance.
          </motion.p>
        </div>
      </section>

      {/* Material Qualities */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {materialQualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <quality.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg mb-2">{quality.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {quality.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Systems */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            Architectural Systems
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-16 max-w-2xl"
          >
            Complete solutions for luxury coastal architecture
          </motion.h2>

          <div className="space-y-24">
            {architecturalSystems.map((system, index) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-xs font-light tracking-[0.2em] uppercase text-accent mb-4">
                    {system.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-6">
                    {system.name}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    {system.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {system.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-muted-foreground font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/samples"
                    className="inline-flex items-center gap-3 text-sm font-light text-foreground hover:text-accent transition-colors group"
                  >
                    Request samples
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={system.image}
                    alt={`${system.name} - Isla Wood Composite`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-wide">
          <div className="max-w-xl mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Finish Collection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-light tracking-tight"
            >
              Colours drawn from nature
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {finishes.map((finish) => (
              <div key={finish.name} className="group cursor-pointer">
                <div
                  className="aspect-[3/4] mb-4 transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: finish.color }}
                />
                <p className="text-sm font-light">{finish.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Bespoke Solutions
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] mb-8">
                Custom composite
                <br />
                <span className="italic text-accent">for unique visions</span>
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Contemporary architecture demands materials that adapt to design vision—not 
                the other way around. Our bespoke solutions deliver custom colors, tailored 
                dimensions, and project-specific systems for architects and developers 
                realizing unique concepts.
              </p>
              <div className="space-y-4 mb-10">
                <div className="border-l-2 border-accent pl-5">
                  <h4 className="font-serif text-lg mb-1">Custom Colors & Finishes</h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Match any architectural palette with precision-tinted composite surfaces.
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-5">
                  <h4 className="font-serif text-lg mb-1">Tailored Dimensions</h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Non-standard profiles and lengths for complex architectural requirements.
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-5">
                  <h4 className="font-serif text-lg mb-1">Project-Specific Systems</h4>
                  <p className="text-muted-foreground text-sm font-light">
                    Integrated solutions for facades, terraces, and louvres designed as one.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Discuss your project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/samples"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Request samples
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={textureDecking}
                alt="Custom composite materials - Isla Wood Composite"
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-wide text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-light mb-6"
          >
            Start your project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-light mb-10 max-w-xl mx-auto"
          >
            Request our curated sample collection to experience material quality firsthand, 
            or connect directly to discuss your architectural vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/samples" className="btn-accent inline-flex items-center justify-center gap-2">
              Request Sample Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Materials;