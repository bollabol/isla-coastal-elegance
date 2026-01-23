import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sun, 
  Shield, 
  Leaf, 
  Users, 
  Award, 
  Clock, 
  Palette, 
  Wrench,
  Building,
  Globe,
  Heart
} from "lucide-react";
import projectTerrace from "@/assets/project-terrace.jpg";
import heroVilla from "@/assets/hero-villa.jpg";

const whyChooseUs = [
  {
    icon: Sun,
    title: "Island Climate Expertise",
    description: "Engineered specifically for intense UV, salt air, humidity and temperature extremes of coastal environments.",
  },
  {
    icon: Shield,
    title: "15 Year Warranty",
    description: "Our confidence in material performance backed by comprehensive long-term protection.",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description: "Bespoke colours, dimensions and finishes tailored to your architectural vision.",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "Manufactured from recycled content with environmentally responsible production processes.",
  },
  {
    icon: Users,
    title: "Architectural Partnership",
    description: "We collaborate closely with architects and designers who share our commitment to excellence.",
  },
  {
    icon: Wrench,
    title: "Technical Excellence",
    description: "Comprehensive support from specification through installation and beyond.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Projects Completed", icon: Building },
  { value: "25+", label: "Countries Served", icon: Globe },
  { value: "100%", label: "Client Satisfaction", icon: Heart },
];

const principles = [
  {
    number: "01",
    title: "Uncompromising Quality",
    description:
      "We source exclusively from manufacturers who meet our rigorous performance standards for coastal environments.",
    icon: Award,
  },
  {
    number: "02",
    title: "Architectural Partnership",
    description:
      "We collaborate with architects and designers who share our commitment to materials that honour their creative vision.",
    icon: Users,
  },
  {
    number: "03",
    title: "Environmental Responsibility",
    description:
      "Our materials are manufactured from recycled content using sustainable production processes.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Technical Excellence",
    description:
      "From specification to installation, we provide comprehensive support throughout your project.",
    icon: Wrench,
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
            About Isla Wood Composite
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

      {/* Stats Bar */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3 opacity-60" />
                <p className="font-serif text-3xl md:text-4xl mb-1">{stat.value}</p>
                <p className="text-xs font-light tracking-wide uppercase opacity-60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-[1.15] mb-6"
            >
              The Isla Wood Composite
              <br />
              <span className="italic">difference</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-light leading-relaxed"
            >
              We combine premium materials, island climate expertise, and architectural 
              partnership to deliver surfaces that perform as beautifully in their 
              fifteenth year as their first.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary p-10 group hover:bg-warm transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-28 md:py-40 bg-warm">
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
                alt="Architectural terrace with Isla Wood Composite surfaces"
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-28 md:py-40">
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
                className="border-t border-border pt-8 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                    <principle.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-light tracking-[0.2em] text-accent mb-2 block">
                    {principle.number}
                  </span>
                  <h3 className="font-serif text-xl mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={heroVilla}
          alt="Luxury coastal villa with Isla Wood Composite materials"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-white text-center font-light italic max-w-3xl px-6"
          >
            "Designed for islands. Built to last."
          </motion.p>
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
      </section>
    </Layout>
  );
};

export default About;