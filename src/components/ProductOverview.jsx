export default function ProductOverview() {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">About CloudJoy Global II</h2>
        <p className="section-subtitle">
          A long&#8209;term wealth accumulation plan that combines steady growth with the
          flexibility to withdraw funds for retirement, education, or legacy transfers
          across generations.
        </p>

        <div style={styles.grid}>
          <div style={styles.banner}>
            <span style={styles.bannerPlaceholder}>Product Visual</span>
          </div>

          <div style={styles.textBlock}>
            <h3 style={styles.h3}>Why CloudJoy Global II?</h3>
            <ul style={styles.list}>
              <li>
                <strong>Flexible premiums</strong> — choose a short pay period and let
                your value compound over decades.
              </li>
              <li>
                <strong>Global currency access</strong> — convert between 10 major
                currencies to match your life geography.
              </li>
              <li>
                <strong>Guaranteed &amp; non-guaranteed growth</strong> — track both a
                guaranteed cash floor and performance bonuses.
              </li>
              <li>
                <strong>Legacy planning built in</strong> — death benefit settlement,
                beneficiary replacement, and backup owner designations.
              </li>
            </ul>
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
    gap: '40px',
    alignItems: 'center',
  },
  banner: {
    background: 'var(--color-surface)',
    borderRadius: 'var(--radius)',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerPlaceholder: {
    color: 'var(--color-text-muted)',
    fontWeight: 600,
  },
  textBlock: {},
  h3: {
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '16px',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
};
