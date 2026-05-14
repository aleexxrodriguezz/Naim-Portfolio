import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowBg}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Escala tu negocio de <span className="text-primary-gradient">10-30k a 60-90k</span> mes
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-100`}>
            Me involucro 1:1 en tu estructura para escalar tu facturación basándome en Data. Sin fórmulas mágicas, solo estrategia pura.
          </p>
          <div className={`${styles.actions} animate-fade-in delay-200`}>
            <a href="https://wa.me/5491133230965" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              Contactar por WhatsApp
            </a>
            <a href="https://instagram.com/Naimlares" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              Ver Instagram
            </a>
          </div>
        </div>
        
        <div className={`${styles.stats} animate-fade-in delay-300`}>
          <div className={`${styles.statCard} glass`}>
            <h3>+500%</h3>
            <p>Crecimiento Promedio</p>
          </div>
          <div className={`${styles.statCard} glass`}>
            <h3>90k+</h3>
            <p>Facturación Mensual</p>
          </div>
          <div className={`${styles.statCard} glass`}>
            <h3>24/7</h3>
            <p>Soporte y Optimización</p>
          </div>
        </div>
      </div>
    </section>
  );
}
