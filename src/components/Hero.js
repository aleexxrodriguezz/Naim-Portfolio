import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowBg}></div>
      <div className={`container ${styles.container} animate`}>
        <div className={styles.content}>
          <p className={styles.description}>
            Ayudamos a infoproductores y negocios digitales a escalar sus operaciones mediante estrategias de crecimiento, adquisición de clientes y optimización comercial.
          </p>
          <h1 className={styles.title}>
            Escala tu facturación de <span className="text-primary">10k a 90k</span> mes
          </h1>
          <div className={styles.actions}>
            <a href="https://calendly.com/naimdario6/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              Agendar Consulta Estratégica
            </a>
          </div>
        </div>
        
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
