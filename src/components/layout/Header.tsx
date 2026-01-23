import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Materials", href: "/materials" },
  { name: "Applications", href: "/projects" },
  { name: "Projects", href: "/projects" },
  { name: "Sample Collection", href: "/samples" },
  { name: "About Isla", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`font-serif text-xl md:text-2xl font-light tracking-tight transition-colors duration-300 ${
              !isScrolled && isHomePage ? "text-white" : "text-foreground"
            }`}>
              Isla
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigation.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-xs font-light tracking-wide transition-colors duration-300 link-underline ${
                  location.pathname === item.href
                    ? "text-accent"
                    : !isScrolled && isHomePage
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/samples"
              className={`px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 ${
                !isScrolled && isHomePage
                  ? "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-primary"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              Request Samples
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              !isScrolled && isHomePage ? "text-white" : "text-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container-wide py-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-lg font-light tracking-wide ${
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/samples"
                className="btn-primary inline-block text-xs mt-6"
              >
                Request Samples
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
