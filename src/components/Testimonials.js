import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: "Aripka Maia | Maria Jose Bayard",
    role: "Coach & Astróloga",
    description: "De 74k a más de 400k seguidores. Escalamos su presencia digital y optimizamos su embudo de conversión para manejar el crecimiento masivo.",
    before: "/ig_before.png",
    after: "/ig_after.png",
    evidence: "/evidence.jpg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className={styles.testimonials}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className="text-gradient">Casos de Éxito</h2>
          <p className={styles.subtitle}>Resultados reales de clientes que confiaron en nuestra estrategia.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.card} glass`}>
              <div className={styles.top}>
                <div className={styles.info}>
                  <h3>{t.name}</h3>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
              
              <div className={styles.content}>
                <p>{t.description}</p>
              </div>

              <div className={styles.results}>
                <div className={styles.comparison}>
                  <div className={styles.imgWrapper}>
                    <span className={styles.label}>Antes</span>
                    <img src={t.before} alt="Antes" />
                  </div>
                  <div className={styles.imgWrapper}>
                    <span className={styles.label}>Después</span>
                    <img src={t.after} alt="Después" />
                  </div>
                </div>
                
                <div className={styles.evidenceSection}>
                  <h4>Evidencia de Trabajo 1:1</h4>
                  <div className={styles.evidenceImg}>
                    <img src={t.evidence} alt="Evidencia" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
