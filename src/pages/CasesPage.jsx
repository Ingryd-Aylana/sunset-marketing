import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Users,
  Target,
  DollarSign,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import "../styles/CasesPage.css";

export default function CasesPage() {
  const [expandedCase, setExpandedCase] = useState(null);

  const cases = [
    {
      id: 1,
      client: "TechStart Solutions",
      industry: "Tecnologia",
      challenge:
        "Startup B2B precisava gerar leads qualificados e aumentar a presença digital.",
      solution:
        "Implementamos uma estratégia completa de Inbound Marketing com SEO, conteúdo e automação.",
      results: [
        { icon: TrendingUp, metric: "350%", label: "Aumento em Leads" },
        { icon: Users, metric: "12x", label: "Mais Visitantes" },
        { icon: Target, metric: "45%", label: "Taxa de Conversão" },
        { icon: DollarSign, metric: "R$ 2.5M", label: "Receita Gerada" },
      ],
      timeline: "6 meses",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      testimonial: {
        text: "A Sunset transformou completamente nossa estratégia digital. Os resultados superaram todas as expectativas!",
        author: "Carlos Silva",
        role: "CEO, TechStart",
      },
      details: [
        "Auditoria completa de SEO e correção de 200+ erros técnicos.",
        "Criação de funis automatizados de e-mail marketing.",
        "Produção de conteúdo otimizado para blog e redes sociais.",
      ],
    },
  ];

  const toggleCase = (id) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  return (
    <section className="cases-section">
      <div className="cases-container">
        <h2 className="cases-title">Nossos Cases</h2>
        <p className="cases-subtitle">
          Histórias reais de marcas que cresceram com a Sunset
        </p>

        <div className="cases-grid">
          {cases.map((item) => {
            const isExpanded = expandedCase === item.id;
            return (
              <div
                key={item.id}
                className={`case-card ${isExpanded ? "case-card--open" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.client}
                  className="case-image"
                />
                <div className="case-info">
                  <h3 className="case-client">{item.client}</h3>
                  <p className="case-industry">{item.industry}</p>
                  <p className="case-challenge">{item.challenge}</p>

                  <button
                    className="case-toggle"
                    onClick={() => toggleCase(item.id)}
                  >
                    {isExpanded ? (
                      <>
                        Ver menos <ChevronUp className="i i-16" />
                      </>
                    ) : (
                      <>
                        Ver mais <ChevronDown className="i i-16" />
                      </>
                    )}
                  </button>
                </div>

                {isExpanded && (
                  <div className="case-details">
                    <h4>🌟 Solução</h4>
                    <p>{item.solution}</p>

                    <div className="case-results">
                      {item.results.map((res, i) => {
                        const Icon = res.icon;
                        return (
                          <div key={i} className="case-result">
                            <Icon className="case-result-icon" />
                            <div>
                              <div className="case-result-metric">
                                {res.metric}
                              </div>
                              <div className="case-result-label">
                                {res.label}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="case-extra">
                      <p className="case-timeline">
                        ⏱ Duração: {item.timeline}
                      </p>
                      <blockquote className="case-quote">
                        “{item.testimonial.text}”
                        <footer>
                          — {item.testimonial.author},{" "}
                          <span>{item.testimonial.role}</span>
                        </footer>
                      </blockquote>

                      <ul className="case-list">
                        {item.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
