import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  materials: [
    { name: "Facade Cladding", href: "/materials" },
    { name: "Terrace Decking", href: "/materials" },
    { name: "Pool Surrounds", href: "/materials" },
    { name: "Outdoor Elements", href: "/materials" },
  ],
  company: [
    { name: "About Isla", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Sample Collection", href: "/samples" },
    { name: "Contact & Partnerships", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-20 md:py-28">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Brand Statement */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-6 leading-tight">
              Designed for islands.
              <br />
              <span className="italic text-primary-foreground/70">Built to last.</span>
            </h3>
            <p className="text-primary-foreground/60 font-light text-sm leading-relaxed max-w-sm">
              Premium composite surfaces for architects and developers 
              creating enduring coastal architecture across the Mediterranean and beyond.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
              {/* Materials */}
              <div>
                <h4 className="text-[11px] font-light tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
                  Applications
                </h4>
                <ul className="space-y-4">
                  {footerLinks.materials.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm font-light text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-[11px] font-light tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
                  Company
                </h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm font-light text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <span className="font-serif text-lg font-light">Isla Wood Composite</span>
              <span className="text-xs text-primary-foreground/40 font-light">
                © {new Date().getFullYear()}
              </span>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-xs text-primary-foreground/40 font-light tracking-wide">
                Ibiza · Mallorca · Mykonos · Algarve · Dubai
              </span>
              <a
                href="mailto:studio@islawoodcomposite.com"
                className="inline-flex items-center gap-2 text-xs font-light text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                studio@islawoodcomposite.com
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
