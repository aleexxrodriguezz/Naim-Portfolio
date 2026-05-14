import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './testimonios.module.css';

const cases = [
  {
    name: "Aripka Maia",
    role: "Coach & Astróloga",
    growth: "74.6k → 412k seguidores",
    details: [
      "Escalamiento de marca personal a nivel internacional.",
      "Optimización de sistemas de conversión y embudos de venta.",
      "Acompañamiento estratégico 1:1 para manejar crecimiento masivo.",
      "Implementación de infraestructura comercial sólida."
    ],
    before: "/ig_before.png",
    after: "/ig_after.png",
    evidence: "/evidence.jpg"
  }
];

export default function TestimoniosPage() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <div className="container">
          <h1 className="text-gradient">Casos de Éxito</h1>
          <p className={styles.subtitle}>Resultados reales y evidencia de nuestro acompañamiento estratégico.</p>

          <div className={styles.casesList}>
            {cases.map((c, i) => (
              <div key={i} className={styles.caseItem}>
                <div className={styles.caseHeader}>
                  <h2>{c.name}</h2>
                  <span className={styles.growth}>{c.growth}</span>
                </div>

                <div className={styles.layout}>
                  <div className={styles.info}>
                    <p className={styles.role}>{c.role}</p>
                    <ul className={styles.points}>
                      {c.details.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.visuals}>
                    <div className={styles.comparison}>
                      <div className={styles.imgBlock}>
                        <span>Estado Inicial</span>
                        <img src={c.before} alt="Antes" />
                      </div>
                      <div className={styles.imgBlock}>
                        <span>Resultado Final</span>
                        <img src={c.after} alt="Después" />
                      </div>
                    </div>
                    
                    <div className={styles.evidence}>
                      <h3>Evidencia 1:1</h3>
                      <img src={c.evidence} alt="Evidencia con Naim" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
