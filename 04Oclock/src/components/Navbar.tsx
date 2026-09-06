import { useEffect, useState } from "react";
import { MdMenu, MdClose, MdArrowOutward } from "react-icons/md";
import { Link, useRouter } from "../router";
import "./styles/Navbar.css";

export const smoother = { paused: (_val?: boolean) => {} };

const Navbar = () => {
  const { path } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Works", href: "/works" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className={`header-wrapper ${isScrolled ? "scrolled" : ""}`}>
        <div className="header">
          {/* Brand Logo Image 04.png */}
          <Link to="/" className="brand-logo-link" data-cursor="disable">
            <img
              src="/images/04.png"
              alt="04 O'Clock Technologies Logo"
              style={{
                height: "42px",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links-desktop">
            {navLinks.map((link) => {
              const isActive = path === link.href || (link.href !== "/" && path.startsWith(link.href));
              return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`nav-link-item ${isActive ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Header CTA Button */}
          <Link to="/contact" className="header-cta-btn">
            Let's Talk <MdArrowOutward />
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => {
          const isActive = path === link.href || (link.href !== "/" && path.startsWith(link.href));
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`mobile-nav-link ${isActive ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}
        <Link
          to="/contact"
          className="mobile-cta-btn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Let's Talk
        </Link>
      </div>
    </>
  );
};

export default Navbar;
