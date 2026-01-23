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
    application: "Facade & Terrace",
    climate: "Mediterranean coastal",
    image: projectTerrace,
  },
  {
    title: "The Olive House",
    location: "Mallorca, Spain",
    application: "Exterior Cladding",
    climate: "Island maritime",
    image: projectFacade,
  },
  {
    title: "Azure Resort",
    location: "Mykonos, Greece",
    application: "Pool Surrounds",
    climate: "Aegean island",
    image: projectPool,
  },
];

export const FeaturedProjectsSection = () => {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 lg:mb-20">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Selected Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-[1.15]"
            >
              Proven performance
              <br />
              <span className="italic">across island climates</span>
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
              className="inline-flex items-center gap-3 text-sm font-light text-foreground hover:text-accent transition-colors group"
            >
              View all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.application} in ${project.climate} climate`}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-[11px] font-light tracking-[0.2em] uppercase text-muted-foreground">
                  {project.application}
                </p>
                <span className="text-muted-foreground/30">·</span>
                <p className="text-[11px] font-light text-accent">
                  {project.climate}
                </p>
              </div>
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
