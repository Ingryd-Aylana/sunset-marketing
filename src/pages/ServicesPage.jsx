import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp, Sparkles, Zap, Search, PenTool,
  BarChart3, MessageSquare, Video, Globe, ArrowRight  
} from "lucide-react";
import "../styles/ServicesPage.css";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos" },
    { id: "marketing", name: "Marketing" },
    { id: "design", name: "Design" },
    { id: "strategy", name: "Estratégia" },
  ];

  const services = [
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      category: "marketing",
      description: "Estratégias de crescimento acelerado para sua marca",
      features: [
        "Análise de funil de conversão",
        "Otimização de taxa de conversão (CRO)",
        "Growth hacking personalizado",
        "Automação de marketing",
      ],
      price: "A partir de R$ 5.000/mês",
    },
    {
      icon: Sparkles,
      title: "Branding & Identidade",
      category: "design",
      description: "Construa uma marca memorável e impactante",
      features: [
        "Desenvolvimento de identidade visual",
        "Manual de marca completo",
        "Design de logo e papelaria",
        "Guia de tom de voz",
      ],
      price: "A partir de R$ 8.000",
    },
    {
      icon: Zap,
      title: "Performance Ads",
      category: "marketing",
      description: "Campanhas publicitárias de alto desempenho",
      features: [
        "Google Ads e Meta Ads",
        "Remarketing estratégico",
        "Otimização de ROAS",
        "Relatórios em tempo real",
      ],
      price: "A partir de R$ 3.000/mês + budget",
    },
    {
      icon: Search,
      title: "SEO Avançado",
      category: "strategy",
      description: "Domine os resultados de busca orgânica",
      features: [
        "Auditoria técnica completa",
        "Estratégia de conteúdo SEO",
        "Link building white hat",
        "Otimização on-page e off-page",
      ],
      price: "A partir de R$ 4.500/mês",
    },
    {
      icon: PenTool,
      title: "Design Digital",
      category: "design",
      description: "Interfaces e experiências digitais incríveis",
      features: ["UI/UX Design", "Design de landing pages", "Prototipação interativa", "Design system"],
      price: "A partir de R$ 6.000",
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      category: "strategy",
      description: "Decisões baseadas em dados reais",
      features: ["Implementação de GA4", "Dashboards personalizados", "Análise de comportamento", "Relatórios estratégicos"],
      price: "A partir de R$ 3.500/mês",
    },
    {
      icon: MessageSquare,
      title: "Social Media",
      category: "marketing",
      description: "Presença marcante nas redes sociais",
      features: ["Gestão de redes sociais", "Criação de conteúdo", "Engajamento de comunidade", "Estratégia de influenciadores"],
      price: "A partir de R$ 4.000/mês",
    },
    {
      icon: Video,
      title: "Video Marketing",
      category: "design",
      description: "Conte histórias através de vídeos impactantes",
      features: ["Produção de vídeos institucionais", "Motion graphics", "Vídeos para social media", "Edição profissional"],
      price: "A partir de R$ 2.500/vídeo",
    },
    {
      icon: Globe,
      title: "Sites & E-commerce",
      category: "design",
      description: "Plataformas digitais de alta performance",
      features: ["Desenvolvimento responsivo", "Integração com pagamentos", "Otimização de velocidade", "SEO técnico incluído"],
      price: "A partir de R$ 12.000",
    },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section className="svc">
      <div className="svc__container">
        {/* Header */}
        <header className="svc__head">
          <h1 className="svc__title">Nossos Serviços</h1>
          <p className="svc__subtitle">
            Soluções completas de marketing digital para transformar sua presença online
            e gerar resultados extraordinários
          </p>
        </header>

        {/* Category Filter */}
        <div className="svc__filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`svc-filter ${selectedCategory === cat.id ? "is-active" : ""}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="svc__grid">
          {filteredServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="svc-card" style={{ animationDelay: `${i * 90}ms` }}>
                <div className="svc-card__icon">
                  <Icon className="i i-32" />
                </div>

                <h3 className="svc-card__title">{service.title}</h3>
                <p className="svc-card__desc">{service.description}</p>

                <ul className="svc-card__list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="svc-card__item">
                      <span className="check">✓</span>{feature}
                    </li>
                  ))}
                </ul>

                <div className="svc-card__footer">
                  <p className="svc-card__price">{service.price}</p>
                  <Link to="/contato" className="svc-card__btn">
                    Solicitar Orçamento
                    <ArrowRight className="cta-button-icon" />
                  </Link>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bottom */}
        <div className="svc__cta">
          <h2 className="svc__cta-title">Não encontrou o que procura?</h2>
          <p className="svc__cta-sub">Criamos soluções personalizadas para cada necessidade</p>
          <Link to="/contato" className="svc__cta-btn">
            Falar com Especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
