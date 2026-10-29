export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.inner}>
        <p style={styles.text}>
          &copy; {new Date().getFullYear()} Cloudlife &mdash; CloudJoy Global Insurance Plan II.
          All rights reserved.
        </p>
        <p style={styles.disclaimer}>
          This page is for demonstration purposes only. Product terms, conditions, and
          benefits are subject to the official policy contract.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'var(--color-dark)',
    color: '#94a3b8',
    padding: '32px 0',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  text: {
    fontSize: '0.9rem',
  },
  disclaimer: {
    fontSize: '0.8rem',
    color: '#64748b',
  },
};
