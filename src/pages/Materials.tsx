import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import textureDecking from "@/assets/texture-decking.jpg";
import projectFacade from "@/assets/project-facade.jpg";
import projectPool from "@/assets/project-pool.jpg";

const applications = [
  {
    id: "facades",
    name: "Facade Systems",
    subtitle: "Exterior Cladding",
    description:
      "Architectural cladding that defines building character. Our facade systems offer precise profiles and consistent grain patterns that meet the standards of discerning architects.",
    features: [
      "Multiple profile configurations",
      "UV-stable coloring technology",
      "Hidden fastening systems",
      "Fire-retardant specifications",
    ],
    image: projectFacade,
  },
  {
    id: "terraces",
    name: "Terrace Surfaces",
    subtitle: "Decking Solutions",
    description:
      "Surfaces engineered for barefoot comfort and decades of performance. Our terrace decking withstands the demands of coastal living without compromising on aesthetics.",
    features: [
      "Slip-resistant texture",
      "Cool-touch technology",
      "Hollow and solid core options",
      "Integrated drainage design",
    ],
    image: textureDecking,
  },
  {
    id: "pools",
    name: "Pool Surrounds",
    subtitle: "Aquatic Environments",
    description:
      "Specialized surfaces for pool decks and water features. Resistant to chlorine, salt water, and intensive UV exposure while remaining comfortable underfoot.",
    features: [
      "Chlorine and salt resistant",
      "Cool underfoot in direct sun",
      "Anti-slip wet surface rating",
      "Rapid drainage capability",
    ],
    image: projectPool,
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
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-secondary">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            Materials
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] max-w-4xl mb-8"
          >
            Surfaces engineered
            <br />
            <span className="italic">for coastal life</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl leading-relaxed"
          >
            Our composite materials combine the warmth of natural timber with 
            engineering that understands the demands of island and coastal architecture.
          </motion.p>
        </div>
      </section>

      {/* Applications */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <div className="space-y-32 md:space-y-40">
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-xs font-light tracking-[0.3em] uppercase text-accent mb-4">
                    {app.subtitle}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-6">
                    {app.name}
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-10">
                    {app.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {app.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-4 text-sm font-light"
                      >
                        <span className="w-8 h-px bg-accent" />
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
                    src={app.image}
                    alt={app.name}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="py-28 md:py-40 bg-secondary">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <Link
              to="/samples"
              className="bg-primary text-primary-foreground px-10 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              Request Sample Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Materials;
