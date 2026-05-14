import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowBg}></div>
      <div className={`container ${styles.container} animate`}>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>+500%</span>
            <span className={styles.statLabel}>ROI</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>1:1</span>
            <span className={styles.statLabel}>Socio Directo</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>Data</span>
            <span className={styles.statLabel}>Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
}
