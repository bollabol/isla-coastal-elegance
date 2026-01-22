import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import projectTerrace from "@/assets/project-terrace.jpg";
import projectFacade from "@/assets/project-facade.jpg";
import projectPool from "@/assets/project-pool.jpg";

const projects = [
  {
    title: "Villa Serena",
    location: "Ibiza, Spain",
    category: "Decking",
    image: projectTerrace,
  },
  {
    title: "The Olive House",
    location: "Mallorca, Spain",
    category: "Cladding",
    image: projectFacade,
  },
  {
    title: "Azure Resort",
    location: "Mykonos, Greece",
    category: "Pool Deck",
    image: projectPool,
  },
];

export const FeaturedProjectsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-uppercase mb-4"
            >
              Featured Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-section"
            >
              Selected projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="label-uppercase text-xs mb-2">{project.category}</p>
              <h3 className="font-serif text-xl mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm font-light">
                {project.location}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
