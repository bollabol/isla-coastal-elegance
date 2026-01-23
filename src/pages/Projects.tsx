import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import villaTeakTerrace from "@/assets/villa-teak-terrace.jpg";
import villaTeakEvening from "@/assets/villa-teak-evening.jpg";
import villaTeakPool from "@/assets/villa-teak-pool.jpg";
import villaTeakFacade from "@/assets/villa-teak-facade.jpg";
import deckingTeak from "@/assets/decking-teak.jpg";
import deckingSand from "@/assets/decking-sand.jpg";
import deckingGrey from "@/assets/decking-grey.jpg";
import deckingBrown from "@/assets/decking-brown.jpg";
import claddingBlack from "@/assets/cladding-black.jpg";
import claddingLightTeak from "@/assets/cladding-light-teak.jpg";
// New villa images
import villaTeakSunset from "@/assets/villa-teak-sunset.jpg";
import villaWalnutSunset from "@/assets/villa-walnut-sunset.jpg";
import villaOakSunset from "@/assets/villa-oak-sunset.jpg";
import villaBlackSunset from "@/assets/villa-black-sunset.jpg";
import villaCharcoalSunset from "@/assets/villa-charcoal-sunset.jpg";
import villaTeakIbiza from "@/assets/villa-teak-ibiza.jpg";
import villaWalnutMykonos from "@/assets/villa-walnut-mykonos.jpg";
import villaOakDubai from "@/assets/villa-oak-dubai.jpg";
import villaBlackMallorca from "@/assets/villa-black-mallorca.jpg";
import villaCharcoalCoastal from "@/assets/villa-charcoal-coastal.jpg";

const projects = [
  {
    id: 1,
    title: "Villa Horizon",
    location: "Curaçao, Caribbean",
    category: "Private Residence",
    application: "Facade & Terrace",
    description:
      "Stunning ocean-view terrace where our teak composite decking creates seamless indoor-outdoor transitions at golden hour.",
    image: villaTeakTerrace,
    year: "2024",
  },
  {
    id: 2,
    title: "Casa del Mar",
    location: "Bonaire, Caribbean",
    category: "Private Residence",
    application: "Exterior Cladding",
    description:
      "Modern Caribbean architecture featuring our premium teak cladding, designed to withstand tropical conditions while aging gracefully.",
    image: villaTeakFacade,
    year: "2024",
  },
  {
    id: 3,
    title: "Sunset Villa",
    location: "Aruba, Caribbean",
    category: "Private Residence",
    application: "Complete Exterior",
    description:
      "Evening ambiance enhanced by warm composite cladding that captures the Caribbean sunset in every grain.",
    image: villaTeakEvening,
    year: "2024",
  },
  {
    id: 4,
    title: "Coral Bay Resort",
    location: "St. Maarten, Caribbean",
    category: "Hospitality",
    application: "Pool Surrounds",
    description:
      "Luxury poolside retreat featuring slip-resistant composite decking surrounded by tropical bougainvillea.",
    image: villaTeakPool,
    year: "2023",
  },
  {
    id: 5,
    title: "Villa Sol",
    location: "Mediterranean Coast",
    category: "Private Residence",
    application: "Teak Cladding",
    description:
      "Clifftop residence with warm golden teak composite cladding, natural stone elements and infinity pool overlooking the Mediterranean.",
    image: villaTeakSunset,
    year: "2025",
  },
  {
    id: 6,
    title: "Casa Walnut",
    location: "Tropical Resort",
    category: "Private Residence",
    application: "Walnut Cladding",
    description:
      "Contemporary tropical villa featuring deep walnut composite cladding with floating deck extending over the infinity pool.",
    image: villaWalnutSunset,
    year: "2025",
  },
  {
    id: 7,
    title: "Villa Lumière",
    location: "Coastal Paradise",
    category: "Private Residence",
    application: "Oak Cladding",
    description:
      "Multi-level coastal residence with natural oak composite cladding, travertine stone base and lush tropical landscaping.",
    image: villaOakSunset,
    year: "2025",
  },
  {
    id: 8,
    title: "Maison Noire",
    location: "Clifftop Estate",
    category: "Private Residence",
    application: "Black Cladding",
    description:
      "Bold contemporary villa with striking matte black composite cladding, cantilevered over the ocean with dramatic dark infinity pool.",
    image: villaBlackSunset,
    year: "2025",
  },
  {
    id: 9,
    title: "Villa Anthracite",
    location: "Mediterranean Hills",
    category: "Private Residence",
    application: "Charcoal Cladding",
    description:
      "Sophisticated hillside villa with charcoal grey composite cladding, natural stone accents and panoramic sea views.",
    image: villaCharcoalSunset,
    year: "2025",
  },
  {
    id: 10,
    title: "Casa Ibiza",
    location: "Ibiza, Spain",
    category: "Private Residence",
    application: "Teak Cladding",
    description:
      "Iconic Ibiza-style villa with warm teak composite cladding, white stucco walls, rooftop infinity pool and Mediterranean sea views.",
    image: villaTeakIbiza,
    year: "2025",
  },
  {
    id: 11,
    title: "Villa Mykonos",
    location: "Mykonos, Greece",
    category: "Private Residence",
    application: "Walnut Cladding",
    description:
      "Elegant Cycladic-modern fusion with rich walnut composite cladding, traditional white architecture and Aegean Sea panorama.",
    image: villaWalnutMykonos,
    year: "2025",
  },
  {
    id: 12,
    title: "Palm Dunes Estate",
    location: "Dubai, UAE",
    category: "Private Residence",
    application: "Oak Cladding",
    description:
      "Ultra-modern beachfront mansion with light oak composite cladding, desert palms and golden desert-meets-ocean views.",
    image: villaOakDubai,
    year: "2025",
  },
  {
    id: 13,
    title: "Serra Tramuntana",
    location: "Mallorca, Spain",
    category: "Private Residence",
    application: "Black Cladding",
    description:
      "Dramatic cliff-edge villa with bold black composite cladding, ancient olive trees and cascading infinity pool over the Mediterranean.",
    image: villaBlackMallorca,
    year: "2025",
  },
  {
    id: 14,
    title: "Oceanfront Pavilion",
    location: "Tropical Coast",
    category: "Private Residence",
    application: "Charcoal Cladding",
    description:
      "Contemporary beachfront residence with sleek charcoal grey composite cladding, floating terrace extending over the turquoise waters.",
    image: villaCharcoalCoastal,
    year: "2025",
  },
  {
    id: 15,
    title: "Mediterranean Terrace",
    location: "Ibiza, Spain",
    category: "Private Residence",
    application: "Teak Decking",
    description:
      "Elegant Mediterranean terrace with warm teak composite decking, olive trees and lavender gardens overlooking the sea.",
    image: deckingTeak,
    year: "2024",
  },
  {
    id: 16,
    title: "Coastal Retreat",
    location: "Mallorca, Spain",
    category: "Private Residence",
    application: "Sand Decking",
    description:
      "Minimalist coastal villa featuring light sand-colored composite decking with panoramic ocean views.",
    image: deckingSand,
    year: "2024",
  },
  {
    id: 17,
    title: "Urban Rooftop",
    location: "Barcelona, Spain",
    category: "Private Residence",
    application: "Grey Decking",
    description:
      "Contemporary rooftop terrace with sophisticated grey composite decking and modern architectural elements.",
    image: deckingGrey,
    year: "2024",
  },
  {
    id: 18,
    title: "Garden Oasis",
    location: "Marbella, Spain",
    category: "Private Residence",
    application: "Brown Decking",
    description:
      "Warm garden terrace featuring rich brown composite decking surrounded by tropical plants and mature trees.",
    image: deckingBrown,
    year: "2024",
  },
  {
    id: 19,
    title: "Villa Noir",
    location: "Côte d'Azur, France",
    category: "Private Residence",
    application: "Black Cladding",
    description:
      "Dramatic contemporary villa featuring bold black composite cladding, creating a striking contrast against the Mediterranean coastline.",
    image: claddingBlack,
    year: "2024",
  },
  {
    id: 20,
    title: "Casa Serena",
    location: "Formentera, Spain",
    category: "Private Residence",
    application: "Light Teak Cladding",
    description:
      "Elegant Balearic villa with warm honey-blonde composite cladding, harmonizing with the natural stone and olive groves.",
    image: claddingLightTeak,
    year: "2024",
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
            className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl leading-relaxed mb-6"
          >
            A selection of residential and hospitality projects where our materials 
            contribute to architecture of lasting significance.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base font-light text-muted-foreground/80 max-w-2xl leading-relaxed"
          >
            Every project showcases how Isla Wood Composite materials perform in real-world 
            coastal and island environments—from Mediterranean terraces to Caribbean villas. 
            These collaborations with architects and developers demonstrate the lasting beauty 
            and resilience of our surfaces across diverse climates and architectural styles.
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
