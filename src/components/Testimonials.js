import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: "Trabajar con Naim fue el punto de inflexión. Estaba estancado en los 15k y en 90 días escalamos a 65k constantes. Su lectura de la data es de otro nivel.",
    author: "Creador de Contenido — Finanzas",
    stats: "+300% Facturación"
  },
  {
    text: "No es un consultor externo, es un socio que se mete en el día a día. Pasamos la barrera de los 25k que parecía imposible gracias a su infraestructura.",
    author: "Marca Personal — Fitness",
    stats: "Escalado a 80k/mes"
  }
];

export default function Testimonials() {
  return (
    <section id="casos" className={styles.testimonials}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className="text-gradient">Resultados que Hablan por Sí Solos</h2>
          <p className={styles.subtitle}>Lo que dicen los creadores que ya escalaron con Naim.</p>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.card} glass`}>
              <div className={styles.stats}>{t.stats}</div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <strong>{t.author}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
