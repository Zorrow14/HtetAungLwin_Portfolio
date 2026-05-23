import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:htetaunglwin223@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactInfo = [
    {
      icon: '@',
      label: 'EMAIL',
      value: 'htetaunglwin223@gmail.com',
      href: 'mailto:htetaunglwin223@gmail.com',
    },
    {
      icon: '☎',
      label: 'PHONE',
      value: '+60 17 667 9531',
      href: 'tel:+60',
      isPhone: true,
    },
    {
      icon: 'gh',
      label: 'GITHUB',
      value: 'github.com/Zorrow14',
      href: 'https://github.com/Zorrow14',
    },
    {
      icon: 'in',
      label: 'LINKEDIN',
      value: 'linkedin.com/in/htet-aung-lwin',
      href: 'https://www.linkedin.com/in/htet-aung-lwin-6010683b0/',
    },
    {
      icon: '↓',
      label: 'CURRICULUM VITAE',
      value: 'Download CV — Htet Aung Lwin 2026',
      href: 'https://drive.google.com/file/d/1Q-J7Do9MWsBPV_i6qEPotjVK-MZdO9ss/view?usp=drive_link',
      isCV: true,
    },
  ];

  return (
    <section id="contact" className="contact-section animate-on-scroll reveal-up">
      <h2 className="section-title"><span className="gradient-text">05.</span> Get In Touch</h2>
      <p className="contact-intro">
        I am seeking Software Development internship opportunities and
        always enjoy discussing software engineering, system design,
        web technologies, and building practical applications over a
        quiet coffee.
      </p>

      {/* AI Chatbot nudge banner */}
      <div className="contact-chatbot-nudge animate-on-scroll reveal-up delay-1">
        <span className="nudge-dot" />
        <p>
          Want a <strong>fast reply?</strong> Ask my{' '}
          <button
            className="nudge-chatbot-link"
            onClick={() => document.querySelector('.chatbot-fab')?.click()}
          >
            AI assistant
          </button>{' '}
          — it knows my skills, projects, and availability instantly.
        </p>
      </div>

      <div className="contact-grid animate-on-scroll reveal-scale delay-1">
        {/* Left: Contact Info */}
        <div className="contact-info-panel">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.isPhone ? undefined : item.href}
              target={item.href.startsWith('mailto') || item.isPhone ? undefined : '_blank'}
              rel="noreferrer"
              className={`contact-info-item ${item.isCV ? 'contact-info-cv' : ''} ${item.isPhone ? 'contact-info-phone' : ''}`}
              download={item.isCV ? true : undefined}
              onClick={item.isPhone ? (e) => e.preventDefault() : undefined}
            >
              <div className="contact-icon-wrap">
                <span className="contact-icon">{item.icon}</span>
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">{item.label}</span>
                <span className="contact-info-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-panel glass-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-field">
              <label className="form-label">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="form-input"
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label">EMAIL <span className="form-required">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="form-input"
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="form-input form-textarea"
                rows={5}
                required
              />
            </div>
            <button type="submit" className="contact-send-btn">
              {sent ? 'Opening Mail Client...' : 'SEND MESSAGE →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;