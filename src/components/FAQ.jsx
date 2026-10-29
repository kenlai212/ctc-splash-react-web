import { useState } from 'react';
import { faqItems } from '../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <h2 className="section-title">Your Questions Answered</h2>
        <p className="section-subtitle">
          Common questions about CloudJoy Global II, explained simply.
        </p>

        <div style={styles.list}>
          {faqItems.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div key={i} style={styles.item}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={styles.question}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span style={styles.chevron(isOpen)}>▾</span>
                </button>
                {isOpen && <p style={styles.answer}>{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '800px',
  },
  item: {
    background: 'var(--color-bg)',
    borderRadius: 'var(--radius)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow)',
  },
  question: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '18px 24px',
    fontSize: '1rem',
    fontWeight: 600,
    textAlign: 'left',
    color: 'var(--color-text)',
  },
  chevron: (open) => ({
    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s',
    marginLeft: '12px',
    fontSize: '1.2rem',
  }),
  answer: {
    padding: '0 24px 18px',
    fontSize: '0.95rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.7,
  },
};
