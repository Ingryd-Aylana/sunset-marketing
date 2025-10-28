import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Award, Heart, Eye } from "lucide-react";
import "../styles/PortfolioPage.css";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "branding", "web", "social", "video"];
  const filterNames = {
    all: "Todos",
    branding: "Branding",
    web: "Web Design",
    social: "Social Media",
    video: "Vídeo",
  };

  const projects = [
    {
      id: 1,
      title: "EcoTech Sustentável",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      description: "Rebranding completo para startup de tecnologia verde",
      tags: ["Identidade Visual", "Logo", "Manual de Marca"],
      stats: { views: "50k", likes: "2.3k", awards: 3 },
    },
    {
      id: 2,
      title: "FastFood Delivery App",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "UI/UX e desenvolvimento de app de delivery",
      tags: ["UI/UX", "React Native", "Design System"],
      stats: { views: "120k", likes: "5.8k", awards: 5 },
    },
    {
      id: 3,
      title: "Luxe Fashion Brand",
      category: "social",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
      description: "Estratégia de social media para marca de moda",
      tags: ["Instagram", "Conteúdo", "Influenciadores"],
      stats: { views: "200k", likes: "12k", awards: 2 },
    },
    {
      id: 4,
      title: "TechConf 2024",
      category: "video",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
      description: "Vídeo promocional e cobertura de evento tech",
      tags: ["Motion Graphics", "Edição", "Drone"],
      stats: { views: "80k", likes: "4.1k", awards: 4 },
    },
    {
      id: 5,
      title: "FitLife Gym",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      description: "Identidade visual para rede de academias",
      tags: ["Branding", "Fotografia", "Materiais"],
      stats: { views: "65k", likes: "3.2k", awards: 2 },
    },
    {
      id: 6,
      title: "CloudStore E-commerce",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      description: "Desenvolvimento de loja virtual completa",
      tags: ["E-commerce", "Shopify", "Performance"],
      stats: { views: "95k", likes: "4.7k", awards: 3 },
    },
    {
      id: 7,
      title: "Organic Food Co.",
      category: "social",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
      description: "Gestão de redes sociais para marca orgânica",
      tags: ["Feed", "Stories", "Reels"],
      stats: { views: "110k", likes: "6.5k", awards: 1 },
    },
    {
      id: 8,
      title: "StartupHub Explainer",
      category: "video",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Vídeo explicativo animado para plataforma",
      tags: ["Animação", "2D", "Storytelling"],
      stats: { views: "150k", likes: "8.2k", awards: 6 },
    },
    {
      id: 9,
      title: "Premium Hotel Chain",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      description: "Reposicionamento de marca hoteleira",
      tags: ["Luxury Brand", "Fotografia", "Catálogo"],
      stats: { views: "75k", likes: "3.9k", awards: 4 },
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="portfolio">
      <div className="portfolio__container">
        {/* Header */}
        <header className="portfolio__head">
          <h1 className="portfolio__title">Portfólio</h1>
          <p className="portfolio__subtitle">
            Projetos que transformaram marcas e geraram resultados
            extraordinários
          </p>
        </header>

        {/* Filters */}
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? "filter-btn--active" : ""
                }`}
            >
              {filterNames[filter]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid">
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="card__media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card__img"
                />
                <div className="card__overlay">
                  <button className="overlay-btn">
                    Ver Projeto <ExternalLink className="i i-16" />
                  </button>
                </div>
              </div>

              <div className="card__body">
                <h3 className="card__title">{project.title}</h3>
                <p className="card__desc">{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="stats">
                  <span className="stat">
                    <Eye className="i i-16" />
                    {project.stats.views}
                  </span>
                  <span className="stat">
                    <Heart className="i i-16" />
                    {project.stats.likes}
                  </span>
                  <span className="stat">
                    <Award className="i i-16 award" />
                    {project.stats.awards}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="portfolio__cta">
          <h2 className="portfolio__cta-title">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="portfolio__cta-sub">
            Seu próximo projeto de sucesso começa aqui
          </p>
          <Link to="/contato" className="portfolio__cta-btn">
            Iniciar Projeto
          </Link>
        </div>
      </div>
    </section>
  );
}
