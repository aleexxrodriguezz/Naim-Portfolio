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
      "Mejora del posicionamiento de marca personal a nivel internacional.",
      "Optimización de estrategias de adquisición de clientes.",
      "Acompañamiento estratégico 1:1."
    ],
    before: "/aripka_before.jpg",
    after: "/aripka_after.jpg",
    evidence: "/aripka_evidence.jpg"
  },
  {
    name: "Kirka Athletic",
    role: "Fitness & Lifestyle",
    growth: "3,000 → Crecimiento en audiencia",
    details: [
      "Kirka inició con una base de 3,000 seguidores.",
      "Desarrollo de estrategia de contenido y alcance.",
      "Acompañamiento en la profesionalización de la marca.",
      "Optimización de procesos de monetización."
    ],
    before: null,
    after: "/kirka_after.jpg",
    evidence: "/kirka_evidence.jpg"
  }
];

export default function TestimoniosPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <div className="container">
          <h1 className="text-gradient">Casos de Éxito</h1>
          <p className={styles.subtitle}>Metodologías y procesos diseñados para mejorar la gestión comercial y operativa de negocios digitales.</p>

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
                      <div className={styles.pillsGrid}>
                        {c.details.map((point, index) => (
                          <div key={index} className={`${styles.detailPill} glass`}>
                            {point}
                          </div>
                        ))}
                      </div>
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
