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
      "Optimización de sistemas de adquisición de clientes.",
      "Acompañamiento estratégico 1:1."
    ],
    before: "/test_1.jpg",
    after: "/test_5.jpg",
    evidence: "/test_8.jpg"
  },
  {
    name: "Caso de Éxito 2",
    role: "Negocio Digital",
    growth: "Optimización de Conversión",
    details: [
      "Implementación de embudos de venta automatizados.",
      "Mejora del ROI en pauta publicitaria.",
      "Estructura operativa para escalado."
    ],
    before: "/test_2.jpg",
    after: "/test_3.jpg",
    evidence: "/test_4.jpg"
  },
  {
    name: "Caso de Éxito 3",
    role: "Infoproductor",
    growth: "Escalamiento de Ventas",
    details: [
      "Lanzamiento de productos de alto valor.",
      "Sistemas de captación de leads cualificados.",
      "Optimización de infraestructura comercial."
    ],
    before: "/test_6.jpg",
    after: "/test_7.jpg",
    evidence: "/naim.png"
  }
];

export default function TestimoniosPage() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <div className="container">
          <h1 className="text-gradient">Evidencia de Resultados</h1>
          <p className={styles.subtitle}>Sistemas probados y acompañamiento directo 1:1.</p>

          <div className={styles.casesList}>
            {cases.map((c, i) => (
              <div key={i} className={styles.caseItem}>
                <div className={styles.evidenceHeader}>
                  <div className={styles.evidenceImgWrapper}>
                    <img src={c.evidence} alt="Evidencia" className={styles.mainEvidence} />
                  </div>
                  <div className={styles.headerText}>
                    <h2>{c.name}</h2>
                    <p className={styles.role}>{c.role}</p>
                    <span className={styles.growth}>{c.growth}</span>
                  </div>
                </div>

                <div className={styles.detailsSection}>
                  <div className={styles.pointsColumn}>
                    <h3>Estrategia</h3>
                    <ul className={styles.points}>
                      {c.details.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.resultsColumn}>
                    <h3>Resultados</h3>
                    <div className={styles.comparisonGrid}>
                      <div className={styles.resultItem}>
                        <img src={c.before} alt="Antes" />
                        <span className={styles.label}>Inicial</span>
                      </div>
                      <div className={styles.resultItem}>
                        <img src={c.after} alt="Después" />
                        <span className={styles.label}>Final</span>
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
