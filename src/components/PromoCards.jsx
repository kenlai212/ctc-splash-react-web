export default function PromoCards() {
  return (
    <div className="section">
      <div className="container">
        <div style={styles.grid}>
          {/* Card A — Premium Rebate */}
          <div style={styles.card}>
            <span style={styles.badge}>Limited&#8209;Time Offer</span>
            <h3 style={styles.cardTitle}>Up to 75% Premium Rebate</h3>
            <p style={styles.cardDesc}>
              Take advantage of our current promotional rebate on qualifying premium
              payments. Speak to an advisor to see how much you could save.
            </p>
            <button className="btn btn-primary" style={{ marginTop: '16px' }}>
              Download promotion leaflet
            </button>
          </div>

          {/* Card B — Wellness Perks */}
          <div style={styles.card}>
            <span style={styles.badge}>Complimentary</span>
            <h3 style={styles.cardTitle}>Premium Care Perks</h3>
            <ul style={styles.perkList}>
              <li>Medical Concierge paths</li>
              <li>Face&#8209;to&#8209;face Second Medical Opinions (AdvicePro)</li>
              <li>Global Medical Referral access</li>
            </ul>
            <button className="btn btn-outline" style={{ marginTop: '16px' }}>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  card: {
    background: 'var(--color-surface)',
    borderRadius: 'var(--radius)',
    padding: '32px 28px',
    boxShadow: 'var(--shadow)',
  },
  badge: {
    display: 'inline-block',
    background: 'var(--color-accent)',
    color: 'var(--color-dark)',
    fontWeight: 700,
    fontSize: '0.8rem',
    padding: '4px 12px',
    borderRadius: '4px',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '12px',
    color: 'var(--color-dark)',
  },
  cardDesc: {
    fontSize: '0.95rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
  },
  perkList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '0.95rem',
    color: 'var(--color-text)',
  },
};
