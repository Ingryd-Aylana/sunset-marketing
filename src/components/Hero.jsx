import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import "../styles/Hero.css"; // estilo próprio do componente

export default function Hero() {
  const stats = [
    { value: "250+", label: "Projetos" },
    { value: "98%", label: "Satisfação" },
    { value: "5x", label: "ROI Médio" },
    { value: "15", label: "Prêmios" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Eye className="hero-badge-icon" />
            <span>Agência #1 em Crescimento Digital</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-gradient-a">Transforme Sua</span>
            <br />
            <span className="hero-gradient-b">Marca em Legado</span>
          </h1>

          <p className="hero-subtitle">
            Estratégias de marketing que não apenas alcançam resultados,
            <br className="hero-break" />
            mas criam experiências inesquecíveis
          </p>

          <div className="hero-buttons">
            <button className="hero-btn-primary">
              Começar Agora
              <ArrowRight className="hero-btn-icon" />
            </button>

            {/* Botão agora leva para /portfolio */}
            <Link to="/portfolio" className="hero-btn-secondary">
              Ver Portfólio
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="hero-stat"
              style={{ animationDelay: `${800 + i * 100}ms` }}
            >
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
