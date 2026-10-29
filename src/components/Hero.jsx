import { breadcrumbItems } from '../data/breadcrumb';

export default function Hero() {
  return (
    <header style={styles.hero}>
      <div className="container">
        <nav style={styles.breadcrumb}>
          {breadcrumbItems.map((item, i) => (
            <span key={item.label} style={styles.breadcrumbItem}>
              {i > 0 && <span style={styles.breadcrumbSep}> / </span>}
              <a href={item.href}>{item.label}</a>
            </span>
          ))}
        </nav>

        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.title}>CloudJoy Global Insurance Plan II</h1>
            <p style={styles.subtitle}>Short&#8209;pay Savings Insurance Plan</p>
            <p style={styles.catchphrase}>
              Empowering flexible withdrawals and lasting legacy planning
            </p>
          </div>

          <div style={styles.ctaGroup}>
            <button className="btn btn-primary">Download brochure</button>
            <button className="btn btn-outline">Talk to an advisor</button>
          </div>
        </div>
      </div>
    </header>
  );
}

const styles = {
  hero: {
    background: 'var(--color-dark)',
    color: '#fff',
    padding: '32px 0 64px',
  },
  breadcrumb: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    marginBottom: '32px',
  },
  breadcrumbItem: {
    display: 'inline',
  },
  breadcrumbSep: {
    margin: '0 4px',
    opacity: 0.5,
  },
  heroContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: '32px',
  },
  heroText: {
    flex: '1 1 500px',
  },
  title: {
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: '12px',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: 'var(--color-accent)',
    marginBottom: '8px',
  },
  catchphrase: {
    fontSize: '1rem',
    color: '#cbd5e1',
  },
  ctaGroup: {
    display: 'flex',
    gap: '12px',
    flexShrink: 0,
  },
};
