import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowBg}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={`${styles.eyebrow} animate-reveal delay-1`}>
            Growth Partner para Infoproductores
          </p>
          <h1 className={`${styles.title} animate-reveal delay-2`}>
            Escala tu negocio de <span className="text-primary-gradient">10-30k a 60-90k</span> mes
          </h1>
          <p className={`${styles.subtitle} animate-reveal delay-3`}>
            Me involucro 1:1 en tu estructura para escalar tu facturación basándome en Data. Sin fórmulas mágicas, solo estrategia pura.
          </p>
          <div className={`${styles.actions} animate-reveal delay-3`}>
            <a href="https://calendly.com/naimdario6/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              Agendar Consulta Estratégica
            </a>
            <a href="https://instagram.com/Naimlares" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              Ver Instagram
            </a>
          </div>
        </div>
        
        <div className={`${styles.stats} animate-reveal delay-3`}>
          <div className={`${styles.statCard} glass`}>
            <h3>+500%</h3>
            <p>ROI Promedio</p>
          </div>
          <div className={`${styles.statCard} glass`}>
            <h3>60k+</h3>
            <p>Escalado Mensual</p>
          </div>
          <div className={`${styles.statCard} glass`}>
            <h3>1:1</h3>
            <p>Acompañamiento</p>
          </div>
        </div>
      </div>
    </section>
  );
}
