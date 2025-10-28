import React from "react";
import { Sparkles } from "lucide-react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Sparkles className="footer-icon" />
          </div>
          <span className="footer-text">Sunset Marketing</span>
        </div>
        <p className="footer-copy">
          © 2024 Sunset Marketing Agency. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
