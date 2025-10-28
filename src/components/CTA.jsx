import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target } from "lucide-react";
import "../styles/CTA.css"; // importa o estilo específico

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-box">
          <div className="cta-content">
            <Target className="cta-icon pulse" />
            <h2 className="cta-title">Pronto para Decolar?</h2>
            <p className="cta-text">
              Agende uma conversa gratuita e descubra como podemos multiplicar seus resultados
            </p>

            {/* Botão agora é um Link para /contato */}
            <Link to="/contato" className="cta-button">
              Agendar Consultoria Gratuita
              <ArrowRight className="cta-button-icon" />
            </Link>
          </div>

          <div className="cta-deco cta-deco-a"></div>
          <div className="cta-deco cta-deco-b"></div>
        </div>
      </div>
    </section>
  );
}
