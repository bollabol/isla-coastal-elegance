import { motion } from "framer-motion";
import { Sun, Droplets, Wind, ThermometerSun } from "lucide-react";

const values = [
  {
    icon: Sun,
    number: "01",
    title: "UV Resistance",
    description:
      "Advanced UV-stable pigmentation prevents fading and degradation under intense Mediterranean and tropical sunlight.",
  },
  {
    icon: Droplets,
    number: "02",
    title: "Salt & Humidity Proof",
    description:
      "Engineered polymer matrix resists salt air corrosion and moisture absorption in coastal environments.",
  },
  {
    icon: Wind,
    number: "03",
    title: "Weather Endurance",
    description:
      "Withstands seasonal storms, driving rain, and high winds without warping, cracking, or structural compromise.",
  },
  {
    icon: ThermometerSun,
    number: "04",
    title: "Thermal Stability",
    description:
      "Minimal expansion and contraction across extreme temperature fluctuations from summer heat to winter cool.",
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
              Engineered for
              <br />
              island climates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-light leading-relaxed"
            >
              Island and coastal environments are among the most demanding on earth. 
              Our composite surfaces are formulated to thrive where traditional materials fail—
              delivering decades of performance under relentless sun, salt, and humidity.
            </motion.p>
          </div>

          {/* Right Column - Values Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-12 md:gap-y-14">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                      <value.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs font-light tracking-[0.2em] text-accent mt-3">
                      {value.number}
                    </span>
                  </div>
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
