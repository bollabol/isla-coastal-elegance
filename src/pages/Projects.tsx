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
    category: "Private Residence",
    application: "Facade & Terrace",
    description:
      "A contemporary villa where our composite cladding and decking define the architectural language of indoor-outdoor living.",
    image: projectTerrace,
    year: "2024",
  },
  {
    id: 2,
    title: "The Olive House",
    location: "Mallorca, Spain",
    category: "Private Residence",
    application: "Exterior Cladding",
    description:
      "Modern facade system transforming this Mediterranean estate into an architectural landmark of restrained elegance.",
    image: projectFacade,
    year: "2024",
  },
  {
    id: 3,
    title: "Azure Resort",
    location: "Mykonos, Greece",
    category: "Hospitality",
    application: "Pool Surrounds",
    description:
      "Luxury resort pool deck designed for high traffic while maintaining the premium aesthetic expected by discerning guests.",
    image: projectPool,
    year: "2023",
  },
  {
    id: 4,
    title: "Palm Residence",
    location: "Dubai, UAE",
    category: "Private Residence",
    application: "Complete Exterior",
    description:
      "Waterfront property featuring comprehensive composite cladding and decking throughout all outdoor spaces.",
    image: heroVilla,
    year: "2023",
  },
];

const Projects = () => {
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
            Projects
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] max-w-4xl mb-8"
          >
            Architecture
            <br />
            <span className="italic">in context</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl leading-relaxed"
          >
            A selection of residential and hospitality projects where our materials 
            contribute to architecture of lasting significance.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 lg:gap-x-12 lg:gap-y-28">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-8">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.application}`}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[11px] font-light tracking-[0.2em] uppercase text-muted-foreground">
                    {project.application}
                  </span>
                  <span className="text-muted-foreground/40">—</span>
                  <span className="text-[11px] font-light text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm font-light mb-4">
                  {project.location}
                </p>
                <p className="text-muted-foreground/80 text-sm font-light leading-relaxed">
                  {project.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 bg-warm">
        <div className="container-wide text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-8"
          >
            Considering our materials
            <br />
            for your project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg font-light text-muted-foreground max-w-xl mx-auto mb-10"
          >
            We collaborate with architects, developers, and discerning clients 
            to specify surfaces that elevate their vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground px-10 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
