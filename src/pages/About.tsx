import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projectTerrace from "@/assets/project-terrace.jpg";

const principles = [
  {
    number: "01",
    title: "Uncompromising Quality",
    description:
      "We source exclusively from manufacturers who meet our rigorous performance standards for coastal environments.",
  },
  {
    number: "02",
    title: "Architectural Partnership",
    description:
      "We collaborate with architects and designers who share our commitment to materials that honour their creative vision.",
  },
  {
    number: "03",
    title: "Environmental Responsibility",
    description:
      "Our materials are manufactured from recycled content using sustainable production processes.",
  },
  {
    number: "04",
    title: "Technical Excellence",
    description:
      "From specification to installation, we provide comprehensive support throughout your project.",
  },
];

const About = () => {
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
            About Isla
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] max-w-4xl mb-8"
          >
            Materials for
            <br />
            <span className="italic">enduring architecture</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl leading-relaxed"
          >
            Isla Wood Composite is a materials partner for architects and developers 
            creating coastal architecture of lasting significance.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Material Philosophy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight leading-[1.2] mb-8">
                We believe architecture should outlast the seasons
              </h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  Island and coastal architecture exists in tension with its environment. 
                  Salt air, intense sunlight, and seasonal storms demand materials that 
                  perform as beautifully in their tenth year as their first.
                </p>
                <p>
                  We partner with leading composite manufacturers to provide surfaces 
                  that combine the warmth of natural timber with engineering that 
                  understands coastal conditions.
                </p>
                <p>
                  From Ibiza to Dubai, our materials define some of the most 
                  significant residential and hospitality projects in the world's 
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
                alt="Architectural terrace with Isla composite surfaces"
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-28 md:py-40 bg-warm">
        <div className="container-wide">
          <div className="max-w-xl mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Our Principles
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-light tracking-tight"
            >
              What guides us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-border pt-8"
              >
                <span className="text-xs font-light tracking-[0.2em] text-accent mb-4 block">
                  {principle.number}
                </span>
                <h3 className="font-serif text-xl mb-3">{principle.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-8"
          >
            Let's discuss your project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg font-light text-primary-foreground/60 max-w-xl mx-auto mb-10"
          >
            Whether you're specifying materials for a new build or renovation, 
            we're here to support your vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-10 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/90 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
