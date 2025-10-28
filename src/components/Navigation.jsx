import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import "../styles/Navigation.css"; // <— importa o CSS puro

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Serviços", path: "/servicos" },
    { name: "Portfólio", path: "/portfolio" },
    { name: "Cases", path: "/cases" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path) => location.pathname === path;

  const closeMobile = () => setIsMenuOpen(false);

  return (
    <nav className="nav" role="navigation" aria-label="principal">
      <div className="nav__row">
        <Link to="/" className="brand" aria-label="Página inicial" onClick={closeMobile}>
          <span className="brand__logo"><Sparkles className="i i-24" /></span>
          <span className="brand__text">Sunset</span>
        </Link>

        {/* Desktop menu */}
        <div className="menu" role="menubar">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              role="menuitem"
              className={`menu__link ${isActive(item.path) ? "is-active" : ""}`}
            >
              <span className="menu__label">{item.name}</span>
              <span className="menu__underline" />
            </Link>
          ))}
        </div>

        {/* Botão mobile */}
        <button
          className="hamburger"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X className="i i-24" /> : <Menu className="i i-24" />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="menu-mobile" role="menu" aria-label="Menu mobile">
          {menuItems.map((item, i) => (
            <Link
              key={item.name}
              to={item.path}
              role="menuitem"
              className={`menu-mobile__link ${isActive(item.path) ? "is-active" : ""}`}
              style={{ animationDelay: `${i * 50}ms` }}
              onClick={closeMobile}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
