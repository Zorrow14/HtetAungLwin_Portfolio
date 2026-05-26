import React, { useState } from 'react';
import './Contact.css';

const EmailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7L12 13L21 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18A2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8 9.67a16 16 0 0 0 6.33 6.33l1.24-1.23a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5l5-5" />
    <path d="M12 15V3" />
  </svg>
);

const Contact = () => {
  const emailAddress = 'htetaunglwin223@gmail.com';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt('Copy this email:', emailAddress);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const mailtoLink = `mailto:${emailAddress}?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactInfo = [
    {
      iconSvg: <EmailIcon />,
      label: 'EMAIL',
      value: emailAddress,
      href: `mailto:${emailAddress}`,
      isEmail: true,
    },
    {
      iconSvg: <PhoneIcon />,
      label: 'PHONE',
      value: '+60 17 667 9531',
      href: 'tel:+60176679531',
    },
    {
      iconSvg: <GitHubIcon />,
      label: 'GITHUB',
      value: 'github.com/Zorrow14',
      href: 'https://github.com/Zorrow14',
    },
    {
      iconSvg: <LinkedInIcon />,
      label: 'LINKEDIN',
      value: 'linkedin.com/in/htet-aung-lwin',
      href: 'https://www.linkedin.com/in/htet-aung-lwin-6010683b0/',
    },
    {
      iconSvg: <DownloadIcon />,
      label: 'CURRICULUM VITAE',
      value: 'Download CV — Htet Aung Lwin 2026',
      href: 'https://drive.google.com/file/d/1Q-J7Do9MWsBPV_i6qEPotjVK-MZdO9ss/view?usp=drive_link',
      isCV: true,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        <span className="gradient-text">05.</span> Get In Touch
      </h2>

      <p className="contact-intro">
        I am seeking Software Development internship opportunities and always enjoy
        discussing software engineering, system design, web technologies, and building
        practical applications over a quiet coffee.
      </p>

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

      <div className="contact-grid">
        <div className="contact-info-panel">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className={`contact-info-item ${item.isCV ? 'contact-info-cv' : ''}`}
            >
              <a
                href={item.href}
                target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? undefined : '_blank'}
                rel="noreferrer"
                className="contact-info-main"
              >
                <div className="contact-icon-wrap">
                  <span className="contact-icon contact-icon--svg">
                    {item.iconSvg}
                  </span>
                </div>

                <div className="contact-info-text">
                  <span className="contact-info-label">{item.label}</span>
                  <span className="contact-info-value">{item.value}</span>
                </div>
              </a>

              {item.isEmail && (
                <button
                  type="button"
                  className={`copy-email-btn ${copied ? 'copy-email-btn--copied' : ''}`}
                  onClick={handleCopyEmail}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              )}
            </div>
          ))}
        </div>

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
              <label className="form-label">
                EMAIL <span className="form-required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@institution.edu"
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