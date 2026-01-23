import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Engineered Endurance",
    description:
      "Formulated to resist salt, UV, and extreme coastal conditions. Performance guaranteed for decades.",
  },
  {
    number: "02",
    title: "Zero Maintenance",
    description:
      "No staining, sealing, or seasonal care. Our surfaces maintain their character year after year.",
  },
  {
    number: "03",
    title: "Architectural Integrity",
    description:
      "Precise profiles and consistent grain patterns that meet the standards of discerning architects.",
  },
  {
    number: "04",
    title: "Sustainable Origin",
    description:
      "Manufactured from recycled materials with a commitment to environmental responsibility.",
  },
];

export const ValuePropsSection = () => {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column - Statement */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Material Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-[1.15] mb-8"
            >
              Where design
              <br />
              meets durability
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-light leading-relaxed"
            >
              We engineer composite surfaces that honour the aesthetic demands of 
              contemporary architecture while enduring the harshest coastal environments.
            </motion.p>
          </div>

          {/* Right Column - Values Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <span className="text-xs font-light tracking-[0.2em] text-accent mb-4 block">
                    {value.number}
                  </span>
                  <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
