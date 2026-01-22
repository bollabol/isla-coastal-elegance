import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Cladding", href: "/materials" },
    { name: "Decking", href: "/materials" },
    { name: "Outdoor Solutions", href: "/materials" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Request Samples", href: "/samples" },
    { name: "Get a Quote", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-light mb-4">
              Isla Wood Composite
            </h3>
            <p className="text-primary-foreground/70 font-light text-sm leading-relaxed mb-6">
              Premium wood composite solutions for luxury island architecture.
              Designed for durability, crafted for elegance.
            </p>
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-light text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="label-uppercase text-primary-foreground/50 mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
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
            <h4 className="label-uppercase text-primary-foreground/50 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
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

          {/* Resources */}
          <div>
            <h4 className="label-uppercase text-primary-foreground/50 mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
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

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50 font-light">
              © {new Date().getFullYear()} Isla Wood Composite. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-primary-foreground/50 font-light">
                Ibiza · Mallorca · Mykonos · Dubai
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
