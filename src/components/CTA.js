import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="contacto" className={`${styles.cta} animate`}>
      <div className={`container ${styles.container}`}>
        <h2 className="text-gradient">¿Listo para escalar al siguiente nivel?</h2>
        <p className={styles.subtitle}>Si facturas entre 10k y 30k y quieres llegar a los 90k con una estrategia sólida basada en data, hablemos.</p>
        <div className={styles.actions}>
          <a href="https://calendly.com/naimdario6/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            Agendar Llamada Estratégica
          </a>
        </div>
      </div>
    </section>
  );
}
