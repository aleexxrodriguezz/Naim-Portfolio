import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './testimonios.module.css';

const cases = [
  {
    name: "Aripka Maia",
    role: "Coach & Astróloga",
    growth: "Crecimiento Exponencial: 74.6k → 412k seguidores",
    details: [
      "Escalamiento de marca personal a nivel internacional.",
      "Optimización de sistemas de adquisición de clientes.",
      "Acompañamiento estratégico 1:1 en la toma de decisiones.",
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
          <p className={styles.subtitle}>Evidencia real de nuestro impacto en negocios digitales.</p>

          <div className={styles.casesList}>
            {cases.map((c, i) => (
              <div key={i} className={styles.caseItem}>
                
                <div className={styles.evidenceHeader}>
                  <div className={styles.evidenceImgWrapper}>
                    <img src={c.evidence} alt="Evidencia con Naim" className={styles.mainEvidence} />
                  </div>
                  <div className={styles.headerText}>
                    <h2>{c.name}</h2>
                    <p className={styles.role}>{c.role}</p>
                    <span className={styles.growth}>{c.growth}</span>
                  </div>
                </div>

                <div className={styles.detailsSection}>
                  <div className={styles.pointsColumn}>
                    <h3>Actividad Estratégica</h3>
                    <ul className={styles.points}>
                      {c.details.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.resultsColumn}>
                    <h3>Resultados Visuales</h3>
                    <div className={styles.comparisonGrid}>
                      <div className={styles.resultItem}>
                        <img src={c.before} alt="Estado Inicial" />
                        <span className={styles.label}>Antes (74.6k)</span>
                      </div>
                      <div className={styles.resultItem}>
                        <img src={c.after} alt="Resultado Final" />
                        <span className={styles.label}>Después (412k)</span>
                      </div>
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
