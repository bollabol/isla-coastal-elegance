import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projectTerrace from "@/assets/project-terrace.jpg";

const values = [
  {
    title: "Quality First",
    description:
      "We source and supply only the highest quality composite materials, rigorously tested for performance in demanding coastal environments.",
  },
  {
    title: "Architectural Focus",
    description:
      "Our products are designed with architects and designers in mind, offering the aesthetic flexibility to realize bold creative visions.",
  },
  {
    title: "Sustainable Practice",
    description:
      "We're committed to environmental responsibility, working with manufacturers who prioritize recycled content and sustainable production.",
  },
  {
    title: "Expert Support",
    description:
      "From specification to installation, our team provides comprehensive technical support throughout your project.",
  },
];

const About = () => {
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
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display max-w-3xl mb-6"
          >
            Defining outdoor luxury
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large max-w-2xl"
          >
            Isla Wood Composite is a premium supplier of composite cladding and
            decking materials for luxury architectural projects.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-subsection mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  Founded with a passion for exceptional outdoor spaces, Isla
                  Wood Composite was born from the understanding that island and
                  coastal architecture demands materials of uncompromising
                  quality.
                </p>
                <p>
                  We work exclusively with leading composite manufacturers to
                  bring architects, developers, and discerning homeowners
                  materials that combine the warmth of natural wood with the
                  durability required for Mediterranean and coastal climates.
                </p>
                <p>
                  From Ibiza to Dubai, our materials grace some of the most
                  prestigious residential and hospitality projects in the world's
                  most sought-after locations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={projectTerrace}
                alt="Luxury terrace with composite decking"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-warm">
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-uppercase mb-4"
            >
              Our Values
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-section"
            >
              What drives us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 border border-border/50"
              >
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section mb-6"
          >
            Let's work together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-large text-primary-foreground/70 max-w-xl mx-auto mb-8"
          >
            Whether you're planning a new build or a renovation, we're here to
            help you achieve the perfect finish.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-accent/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
