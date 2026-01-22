import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import textureDecking from "@/assets/texture-decking.jpg";
import projectFacade from "@/assets/project-facade.jpg";
import projectPool from "@/assets/project-pool.jpg";

const materials = [
  {
    id: "cladding",
    name: "Composite Cladding",
    description:
      "Transform facades with our premium composite cladding system. Designed for architectural excellence, our cladding combines natural wood aesthetics with superior durability.",
    features: [
      "Available in multiple profiles",
      "UV-stable coloring",
      "Hidden fastening system",
      "Fire-retardant options",
    ],
    image: projectFacade,
  },
  {
    id: "decking",
    name: "Composite Decking",
    description:
      "Create stunning outdoor spaces with our composite decking range. Engineered for comfort underfoot and built to withstand years of use in coastal environments.",
    features: [
      "Slip-resistant surface",
      "Cool-touch technology",
      "Hollow and solid core options",
      "Multiple color options",
    ],
    image: textureDecking,
  },
  {
    id: "outdoor",
    name: "Outdoor Solutions",
    description:
      "Complete your project with our range of outdoor solutions including pergolas, screens, and custom applications tailored to your architectural vision.",
    features: [
      "Custom profiles available",
      "Integrated lighting options",
      "Modular design system",
      "Weather-resistant hardware",
    ],
    image: projectPool,
  },
];

const colors = [
  { name: "Natural Oak", hex: "#C4A77D" },
  { name: "Teak", hex: "#B08968" },
  { name: "Charcoal", hex: "#4A4A4A" },
  { name: "Stone Grey", hex: "#8B8B8B" },
  { name: "Walnut", hex: "#5D4E37" },
  { name: "Sand", hex: "#D4C4A8" },
];

const Materials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-uppercase mb-4"
          >
            Our Materials
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display max-w-3xl mb-6"
          >
            Premium composites for exceptional spaces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large max-w-2xl"
          >
            Explore our range of wood composite materials, engineered for
            performance and designed for beauty.
          </motion.p>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {materials.map((material, index) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="heading-subsection mb-4">{material.name}</h2>
                  <p className="body-large mb-8">{material.description}</p>
                  <ul className="space-y-3 mb-8">
                    {material.features.map((feature) => (
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
                    to="/samples"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Request Samples
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Options */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-uppercase mb-4"
            >
              Color Collection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-section"
            >
              Inspired by nature
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {colors.map((color) => (
              <div key={color.name} className="text-center">
                <div
                  className="aspect-square mb-4 border border-border/50"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-sm font-light">{color.name}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/samples"
              className="btn-primary inline-flex items-center gap-2"
            >
              Order Sample Kit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Materials;
