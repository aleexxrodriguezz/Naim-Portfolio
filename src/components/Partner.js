import styles from './Partner.module.css';

export default function Partner() {
  return (
    <section id="socio" className={`${styles.partner} animate`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageArea}>
          <img src="/naim.png" alt="Naim" className={styles.image} />
        </div>
        
        <div className={styles.content}>
          <span className={styles.role}>Growth Partner</span>
          <h2 className="text-gradient">Naim</h2>
          <p className={styles.description}>
          </p>
          <div className={styles.actions}>
            <a href="https://calendly.com/naimdario6/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              Agendar Llamada Estratégica
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
