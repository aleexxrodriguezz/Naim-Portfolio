import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowBg}></div>
      <div className={`container ${styles.container} animate`}>
        <div className={styles.content}>
          <div className={styles.badge}>Growth Partner</div>
          <h1 className={styles.title}>
            Optimiza la Estrategia Comercial de tu <br />
            <span className="text-primary">Negocio Digital</span>
          </h1>
          <p className={styles.description}>
            Especialistas en optimizar la estrategia comercial de negocios digitales mediante consultoría estratégica, adquisición de clientes e infraestructura operativa.
          </p>
          <div className={styles.actions}>
            <a href="https://calendly.com/naimdario6/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              Agendar Consulta Estratégica
            </a>
          </div>
        </div>
        
        <div className={styles.statsPills}>
          <div className={`${styles.statPill} glass`}>
            <span className={styles.pillIcon}>🎯</span>
            <span className={styles.pillLabel}>Estrategia Digital</span>
          </div>
          <div className={`${styles.statPill} glass`}>
            <span className={styles.pillIcon}>📈</span>
            <span className={styles.pillLabel}>Escalamiento Comercial</span>
          </div>
          <div className={`${styles.statPill} glass`}>
            <span className={styles.pillIcon}>🚀</span>
            <span className={styles.pillLabel}>Indicadores Operativos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
