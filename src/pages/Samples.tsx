import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import textureDecking from "@/assets/texture-decking.jpg";

const sampleSets = [
  {
    id: "facade",
    name: "Facade Collection",
    description: "Cladding samples in all available finishes and profiles.",
  },
  {
    id: "terrace",
    name: "Terrace Collection",
    description: "Decking samples with texture and profile variations.",
  },
  {
    id: "complete",
    name: "Complete Collection",
    description: "Comprehensive set including all materials and finishes.",
  },
];

const Samples = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    projectType: "",
    sampleSet: "",
    address: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Request Received",
      description: "We'll prepare your sample collection and be in touch shortly.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      phone: "",
      projectType: "",
      sampleSet: "",
      address: "",
      projectDetails: "",
    });
    setIsSubmitting(false);
  };

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
            Sample Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] max-w-4xl mb-8"
          >
            Experience the
            <br />
            <span className="italic">materials firsthand</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl leading-relaxed"
          >
            We provide curated sample collections for architects, developers, and 
            design professionals evaluating materials for their projects.
          </motion.p>
        </div>
      </section>

      {/* Sample Sets */}
      <section className="py-20 bg-warm">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleSets.map((set, index) => (
              <motion.div
                key={set.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-background p-8 border-t-2 border-accent"
              >
                <h3 className="font-serif text-xl mb-3">{set.name}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {set.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={textureDecking}
                alt="Sample collection presentation"
                className="w-full aspect-[4/5] object-cover mb-10"
              />
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg mb-2">Professional Service</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    Sample collections are provided complimentary for qualified 
                    architectural and development projects.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">Delivery</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    Samples are typically dispatched within 3-5 business days 
                    to addresses throughout Europe and the Mediterranean.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-4">
                Request your collection
              </h2>
              <p className="text-muted-foreground font-light mb-10">
                Please provide details about your project so we can prepare 
                the most relevant sample selection.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-border bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-border bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                      Company / Studio
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-border bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                      Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-border bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                    >
                      <option value="">Select...</option>
                      <option value="architect">Architect</option>
                      <option value="developer">Developer</option>
                      <option value="contractor">Contractor</option>
                      <option value="designer">Interior / Landscape Designer</option>
                      <option value="owner">Property Owner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-border bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                    >
                      <option value="">Select...</option>
                      <option value="residential-new">Residential - New Build</option>
                      <option value="residential-renovation">Residential - Renovation</option>
                      <option value="hospitality">Hospitality / Resort</option>
                      <option value="commercial">Commercial</option>
                      <option value="development">Multi-Unit Development</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                      Sample Collection *
                    </label>
                    <select
                      name="sampleSet"
                      value={formData.sampleSet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-border bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                    >
                      <option value="">Select...</option>
                      {sampleSets.map((set) => (
                        <option key={set.id} value={set.id}>
                          {set.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                    Shipping Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Full postal address"
                    className="w-full px-4 py-4 border border-border bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-wide uppercase mb-3">
                    Project Details
                  </label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Brief description of your project and material requirements..."
                    className="w-full px-4 py-4 border border-border bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground px-10 py-5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center gap-3 w-full md:w-auto"
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : (
                    <>
                      Request Collection
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Samples;
