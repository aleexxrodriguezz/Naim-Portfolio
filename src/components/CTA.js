import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="contacto" className={`${styles.cta} animate`}>
      <div className={`container ${styles.container}`}>
        <h2 className="text-gradient">¿Listo para dar el siguiente paso?</h2>
        <p className={styles.subtitle}>Si tenés un negocio digital en crecimiento y querés mejorar tus procesos comerciales, adquisición de clientes y estructura operativa, podemos ayudarte a ordenar la estrategia.</p>
        <div className={styles.actions}>
          <a href="https://calendly.com/naimdario6/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            Agendar Llamada Estratégica
          </a>
        </div>
      </div>
    </section>
  );
}
