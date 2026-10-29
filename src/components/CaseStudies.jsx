import { useState } from 'react';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  const [activeId, setActiveId] = useState(caseStudies[0].id);
  const active = caseStudies.find((c) => c.id === activeId);

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Real&#8209;Life Impact</h2>
        <p className="section-subtitle">
          See how CloudJoy Global II works for people in different stages of life.
        </p>

        {/* Tab selector */}
        <div style={styles.tabs}>
          {caseStudies.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActiveId(cs.id)}
              style={{
                ...styles.tab,
                ...(cs.id === activeId ? styles.tabActive : {}),
              }}
            >
              {cs.name}, {cs.age}
            </button>
          ))}
        </div>

        {/* Active case content */}
        <div style={styles.caseCard}>
          <h3 style={styles.caseName}>
            {active.name}, {active.age}
          </h3>
          <p style={styles.caseTagline}>{active.tagline}</p>

          <ol style={styles.timeline}>
            {active.timeline.map((t, i) => (
              <li key={i} style={styles.timelineItem}>
                <span style={styles.timelineYear}>{t.year}</span>
                <span style={styles.timelineEvent}>{t.event}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

const styles = {
  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '32px',
    flexWrap: 'wrap',
  },
  tab: {
    padding: '10px 20px',
    borderRadius: 'var(--radius)',
    border: '2px solid var(--color-border)',
    fontWeight: 600,
    fontSize: '0.95rem',
    color: 'var(--color-text-muted)',
    transition: 'border-color 0.2s, color 0.2s',
  },
  tabActive: {
    borderColor: 'var(--color-accent)',
    color: 'var(--color-accent)',
  },
  caseCard: {
    background: 'var(--color-surface)',
    borderRadius: 'var(--radius)',
    padding: '32px',
  },
  caseName: {
    fontSize: '1.4rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  caseTagline: {
    color: 'var(--color-text-muted)',
    marginBottom: '24px',
  },
  timeline: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  timelineItem: {
    display: 'flex',
    gap: '24px',
    alignItems: 'baseline',
    padding: '12px 0',
    borderBottom: '1px solid var(--color-border)',
  },
  timelineYear: {
    fontWeight: 700,
    minWidth: '120px',
    color: 'var(--color-accent)',
  },
  timelineEvent: {
    flex: 1,
  },
};
