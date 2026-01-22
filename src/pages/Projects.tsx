import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import projectTerrace from "@/assets/project-terrace.jpg";
import projectFacade from "@/assets/project-facade.jpg";
import projectPool from "@/assets/project-pool.jpg";
import heroVilla from "@/assets/hero-villa.jpg";

const projects = [
  {
    id: 1,
    title: "Villa Serena",
    location: "Ibiza, Spain",
    category: "Residential",
    description:
      "A contemporary villa featuring our premium decking throughout the outdoor living spaces.",
    image: projectTerrace,
    year: 2024,
  },
  {
    id: 2,
    title: "The Olive House",
    location: "Mallorca, Spain",
    category: "Residential",
    description:
      "Modern cladding system transforming this Mediterranean estate into an architectural landmark.",
    image: projectFacade,
    year: 2024,
  },
  {
    id: 3,
    title: "Azure Resort",
    location: "Mykonos, Greece",
    category: "Hospitality",
    description:
      "Luxury resort pool deck designed to withstand high traffic while maintaining premium aesthetics.",
    image: projectPool,
    year: 2023,
  },
  {
    id: 4,
    title: "Palm Residence",
    location: "Dubai, UAE",
    category: "Residential",
    description:
      "Exclusive waterfront property with composite cladding and decking throughout.",
    image: heroVilla,
    year: 2023,
  },
];

const Projects = () => {
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
            Our Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display max-w-3xl mb-6"
          >
            Projects that inspire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large max-w-2xl"
          >
            Explore our portfolio of luxury residential and commercial projects
            across the Mediterranean and beyond.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-sm font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="label-uppercase text-xs">{project.category}</p>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm font-light">
                  {project.location}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm">
        <div className="container-wide text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section mb-6"
          >
            Have a project in mind?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-large max-w-xl mx-auto mb-8"
          >
            We work with architects, developers, and private clients to bring
            their vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
