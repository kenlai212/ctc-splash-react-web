import { benefits } from '../data/benefits';

export default function KeyBenefits() {
  return (
    <div className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <h2 className="section-title">Key Benefits</h2>
        <p className="section-subtitle">
          Six pillars that make SunJoy Global II a comprehensive wealth and protection
          solution.
        </p>

        <div style={styles.grid}>
          {benefits.map((b) => (
            <div key={b.title} style={styles.card}>
              <span style={styles.icon}>{b.icon}</span>
              <h3 style={styles.cardTitle}>{b.title}</h3>
              <p style={styles.cardDesc}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
  },
  card: {
    background: 'var(--color-bg)',
    borderRadius: 'var(--radius)',
    padding: '28px 24px',
    boxShadow: 'var(--shadow)',
  },
  icon: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '8px',
    color: 'var(--color-dark)',
  },
  cardDesc: {
    fontSize: '0.92rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
  },
};
