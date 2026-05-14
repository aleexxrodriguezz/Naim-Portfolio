import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowBg}></div>
      <div className={`container ${styles.container} animate`}>
        <div className={styles.content}>
          <div className={styles.badge}>Growth Partner</div>
          <h1 className={styles.title}>
            Tu Socio Estratégico en <br />
            <span className="text-primary">Crecimiento y Escalamiento</span>
          </h1>
          <p className={styles.description}>
            Especialistas en escalar infoproductores y negocios digitales mediante estrategias de adquisición de clientes y optimización de infraestructura comercial.
          </p>
          <div className={styles.actions}>
            <a href="https://calendly.com/naimdario6/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              Agendar Consulta Estratégica
            </a>
          </div>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>Data</span>
            <span className={styles.statLabel}>Driven</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>1:1</span>
            <span className={styles.statLabel}>Acompañamiento</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>ROI</span>
            <span className={styles.statLabel}>Optimizado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
