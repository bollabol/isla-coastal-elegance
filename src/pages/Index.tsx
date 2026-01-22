import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { MaterialsPreviewSection } from "@/components/home/MaterialsPreviewSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValuePropsSection />
      <FeaturedProjectsSection />
      <MaterialsPreviewSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
