import React, { useState, useEffect } from "react";
import { TrendingUp, Sparkles, Zap } from "lucide-react";
import "../styles/Services.css"; // estilos do componente

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: TrendingUp, title: "Growth Marketing", desc: "Estratégias que transformam visitantes em clientes fiéis" },
    { icon: Sparkles, title: "Branding & Design", desc: "Identidade visual que conta a história da sua marca" },
    { icon: Zap, title: "Performance Ads", desc: "Campanhas otimizadas para resultados exponenciais" },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-head">
          <h2 className="services-title">Nossos Serviços</h2>
          <p className="services-subtitle">
            Soluções completas para elevar sua presença digital
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isActive = activeService === i;
            return (
              <div
                key={service.title}
                onMouseEnter={() => setActiveService(i)}
                className={`service-card ${isActive ? "service-card--active" : ""}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className={`service-icon ${isActive ? "service-icon--active" : ""}`}>
                  <Icon className="i i-32" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
