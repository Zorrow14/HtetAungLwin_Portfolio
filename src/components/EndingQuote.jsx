import React from 'react';
import './EndingQuote.css';

const EndingQuote = () => {
  return (
    <section className="ending-quote-section">
      <div className="ending-quote-container">
        <h2 className="ending-quote-text">
          Once a man told me — <br />
          <span>
            “Even if the beginning is not good, everything is fine as long as the
            result is good.”
          </span>
        </h2>

        <div className="ending-quote-divider"></div>

        <p className="ending-quote-copyright">
          © 2026 Htet Aung Lwin
        </p>
      </div>
    </section>
  );
};

export default EndingQuote;