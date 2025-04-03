
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-black shadow-subtle"
          : "py-4 bg-black bg-opacity-90"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="AWA MAJU Logo" 
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#home"
                className="text-white hover:text-primary transition-colors animated-link"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white hover:text-primary transition-colors animated-link"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-primary transition-colors animated-link"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                className="text-white hover:text-primary transition-colors animated-link"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-white hover:text-primary transition-colors animated-link"
              >
                Testimonials
              </a>
            </li>
          </ul>
          <Button asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black pt-24 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="container px-6 py-6">
          <ul className="flex flex-col gap-6">
            <li>
              <a
                href="#home"
                className="text-xl font-medium block py-2 text-white"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-xl font-medium block py-2 text-white"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-xl font-medium block py-2 text-white"
                onClick={toggleMobileMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                className="text-xl font-medium block py-2 text-white"
                onClick={toggleMobileMenu}
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-xl font-medium block py-2 text-white"
                onClick={toggleMobileMenu}
              >
                Testimonials
              </a>
            </li>
            <li className="pt-4">
              <Button className="w-full" asChild>
                <a href="#contact" onClick={toggleMobileMenu}>
                  Contact Us
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
