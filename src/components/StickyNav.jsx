import { useEffect } from 'react';

const anchorMap = {
  About: 'about',
  'Key benefits': 'key-benefits',
  'Real-life impact': 'real-life-impact',
  'Your questions answered': 'your-questions-answered',
};

export default function StickyNav({ items, active, onChange }) {
  useEffect(() => {
    const nav = document.getElementById('sticky-nav');
    if (!nav) return;

    const onScroll = () => {
      const rect = nav.getBoundingClientRect();
      if (rect.top <= 0) {
        nav.classList.add('stuck');
      } else {
        nav.classList.remove('stuck');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="sticky-nav" style={styles.nav}>
      <div className="container" style={styles.inner}>
        {items.map((item) => {
          const isActive = item === active;
          return (
            <a
              key={item}
              href={`#${anchorMap[item]}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(anchorMap[item]);
                el?.scrollIntoView({ behavior: 'smooth' });
                onChange(item);
              }}
              style={{
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              }}
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: 'var(--color-bg)',
    borderBottom: '1px solid var(--color-border)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    transition: 'box-shadow 0.2s',
  },
  inner: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto',
  },
  link: {
    padding: '16px 20px',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: 'var(--color-text-muted)',
    borderBottom: '3px solid transparent',
    whiteSpace: 'nowrap',
    transition: 'color 0.2s, border-color 0.2s',
  },
  activeLink: {
    color: 'var(--color-accent)',
    borderBottomColor: 'var(--color-accent)',
  },
};
