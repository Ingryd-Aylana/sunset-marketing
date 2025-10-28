import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "../styles/ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📬 Dados enviados:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <header className="contact__header">
          <h1 className="contact__title">Entre em Contato</h1>
          <p className="contact__subtitle">
            Vamos conversar sobre o seu projeto e criar algo extraordinário juntos 🚀
          </p>
        </header>

        <div className="contact__grid">
          {/* Formulário */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="contact__group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                required
              />
            </div>

            <div className="contact__group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escreva sua mensagem..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact__button">
              Enviar Mensagem
              <Send className="i i-18" />
            </button>
          </form>

          {/* Informações */}
          <div className="contact__info">
            <h3>Informações</h3>
            <ul>
              <li>
                <Mail className="i i-18" /> contato@sunsetmarketing.com
              </li>
              <li>
                <Phone className="i i-18" /> (11) 99999-1234
              </li>
              <li>
                <MapPin className="i i-18" /> São Paulo - SP, Brasil
              </li>
            </ul>

            <div className="contact__map">
              <iframe
                title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.775037165797!2d-46.6623257!3d-23.5765531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c2b9adf0b7%3A0xe8e0f58b5cb48b56!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1695761271160!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
