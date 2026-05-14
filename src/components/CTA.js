import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="contacto" className={styles.cta}>
      <div className={`container ${styles.container} glass animate-reveal`}>
        <div className={styles.content}>
          <h2 className="text-gradient">¿Listo para escalar al siguiente nivel?</h2>
          <p className={styles.subtitle}>Si facturas entre 10k y 30k y quieres llegar a los 90k con una estrategia sólida basada en data, hablemos.</p>
          <div className={styles.buttonGroup}>
            <a href="https://calendly.com/naimdario6/30min" target="_blank" rel="noopener noreferrer" className={styles.btn}>
              Agendar Llamada Estratégica
            </a>
            <a href="https://instagram.com/Naimlares" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              Seguir en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
