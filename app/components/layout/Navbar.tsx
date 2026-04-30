"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.brand}>
          Axonova
        </a>

        <nav className={styles.nav} aria-label="Navigation principale">
          <ul className={styles.links}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.toggle}
          type="button"
          aria-label="Ouvrir le menu mobile"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((state) => !state)}
        >
          <span className={styles.hamburger} />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
