import { motion } from "framer-motion";
import { Shield, Leaf, Sparkles, Clock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Exceptional Durability",
    description:
      "Engineered to withstand salt, sun, and coastal weather conditions for decades.",
  },
  {
    icon: Clock,
    title: "Low Maintenance",
    description:
      "No staining, sealing, or sanding required. Simply clean and enjoy.",
  },
  {
    icon: Sparkles,
    title: "Premium Aesthetics",
    description:
      "Natural wood appearance with consistent color and grain patterns.",
  },
  {
    icon: Leaf,
    title: "Sustainable Choice",
    description:
      "Made from recycled materials with a lower environmental footprint.",
  },
];

export const ValuePropsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="label-uppercase mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section"
          >
            Built for luxury, engineered for life
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl mb-3">{value.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
