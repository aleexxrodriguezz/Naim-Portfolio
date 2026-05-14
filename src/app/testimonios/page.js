"use client";
import { useState } from 'react';
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
    before: "/aripka_before.jpg",
    after: "/aripka_after.jpg",
    evidence: "/aripka_evidence.jpg"
  },
  {
    name: "Kirka Athletic",
    role: "Fitness & Lifestyle",
    growth: "3,000 → Crecimiento exponencial en seguidores",
    details: [
      "Kirka empezó con solo 3,000 seguidores.",
      "Desarrollo de estrategia de contenido viral.",
      "Acompañamiento en la profesionalización de la marca.",
      "Sistemas de monetización de audiencia."
    ],
    before: null, // No explicitly named "before" for Kirka in downloads
    after: "/kirka_after.jpg",
    evidence: "/kirka_evidence.jpg"
  },
  {
    name: "Tommy Castellanos",
    role: "Negocios Digitales",
    growth: "20k → 35/40k mes",
    details: [
      "Pasó de facturar 20k a 35/40k de forma recurrente.",
      "Optimización de procesos de venta y cierre.",
      "Escalamiento de infraestructura comercial.",
      "Sistemas de adquisición de clientes cualificados."
    ],
    before: null, // No explicitly named "before" for Tommy
    after: "/tommy_after.jpg",
    evidence: "/tommy_evidence.jpg"
  }
];

export default function TestimoniosPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <div className="container">
          <h1 className="text-gradient">Casos de Éxito</h1>
          <p className={styles.subtitle}>Sistemas probados y evidencia real de acompañamiento 1:1.</p>

          <div className={styles.accordion}>
            {cases.map((c, i) => (
              <div 
                key={i} 
                className={`${styles.accordionItem} ${activeIndex === i ? styles.active : ''}`}
              >
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  <div className={styles.headerTitle}>
                    <span className={styles.index}>0{i + 1}</span>
                    <h2>{c.name}</h2>
                  </div>
                  <div className={styles.headerInfo}>
                    <span className={styles.badge}>{c.growth}</span>
                    <span className={styles.arrow}>{activeIndex === i ? '−' : '+'}</span>
                  </div>
                </button>

                <div className={styles.accordionContent}>
                  <div className={styles.contentLayout}>
                    <div className={styles.textPart}>
                      <p className={styles.role}>{c.role}</p>
                      <ul className={styles.points}>
                        {c.details.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.visualsPart}>
                      <div className={styles.mainEvidenceWrapper}>
                        <p className={styles.label}>Evidencia 1:1</p>
                        <img src={c.evidence} alt="Evidencia" className={styles.evidenceImg} />
                      </div>
                      
                      <div className={styles.resultsGrid}>
                        {c.before && (
                          <div className={styles.resultItem}>
                            <p className={styles.label}>Antes</p>
                            <img src={c.before} alt="Antes" />
                          </div>
                        )}
                        {c.after && (
                          <div className={styles.resultItem}>
                            <p className={styles.label}>{c.before ? 'Después' : 'Resultado'}</p>
                            <img src={c.after} alt="Después" />
                          </div>
                        )}
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
