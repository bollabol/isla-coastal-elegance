import { motion } from "framer-motion";
import { Shield, Clock, Leaf, Wrench } from "lucide-react";
import projectFacade from "@/assets/project-facade.jpg";

const challenges = [
  {
    challenge: "Intense UV Exposure",
    solution: "UV-stable polymer technology prevents colour fading and surface degradation even under 3,000+ hours of annual sunlight.",
  },
  {
    challenge: "Salt Air Corrosion",
    solution: "Non-porous composite core and marine-grade formulation resist salt penetration that destroys timber and metals.",
  },
  {
    challenge: "High Humidity & Rain",
    solution: "Zero moisture absorption eliminates swelling, warping, and the mould growth common in tropical climates.",
  },
  {
    challenge: "Temperature Extremes",
    solution: "Engineered thermal stability ensures consistent performance from scorching summers to mild winters.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Guaranteed performance against structural failure, rot, and excessive fading.",
  },
  {
    icon: Clock,
    title: "Zero Maintenance",
    description: "No annual staining, sealing, or sanding. Simply clean and enjoy.",
  },
  {
    icon: Leaf,
    title: "Sustainable Choice",
    description: "Manufactured from 95% recycled materials with responsible production.",
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    description: "Hidden clip systems and precision profiles simplify professional installation.",
  },
];

export const IslandEngineeringSection = () => {
  return (
    <section className="py-28 md:py-40 bg-primary text-primary-foreground">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-light tracking-[0.3em] uppercase text-primary-foreground/50 mb-6"
          >
            Why Isla
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] mb-8"
          >
            Built for the world's
            <br />
            <span className="italic text-primary-foreground/80">most demanding climates</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-light text-primary-foreground/60 leading-relaxed"
          >
            Traditional timber fails within years in island environments. Our composites are 
            specifically engineered to overcome the unique challenges of coastal and island 
            architecture—from the Balearics to the Gulf.
          </motion.p>
        </div>

        {/* Challenges & Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xs font-light tracking-[0.3em] uppercase text-primary-foreground/40 mb-10">
              Island Challenges — Our Solutions
            </h3>
            <div className="space-y-8">
              {challenges.map((item, index) => (
                <motion.div
                  key={item.challenge}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-accent pl-6"
                >
                  <h4 className="font-serif text-lg mb-2 text-primary-foreground">
                    {item.challenge}
                  </h4>
                  <p className="text-primary-foreground/60 text-sm font-light leading-relaxed">
                    {item.solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={projectFacade}
              alt="Isla composite cladding on coastal architecture"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>
        </div>

        {/* Benefits Row */}
        <div className="border-t border-primary-foreground/10 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-serif text-lg mb-2">{benefit.title}</h4>
                <p className="text-primary-foreground/50 text-sm font-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
