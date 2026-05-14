import styles from './Services.module.css';

const services = [
  {
    title: "Auditoría de Sistemas y Data",
    description: "Analizamos tus métricas actuales quirúrgicamente para identificar fugas de facturación y cuellos de botella en tu embudo.",
    icon: "📊"
  },
  {
    title: "Infraestructura de Escalado 1:1",
    description: "Implementamos los sistemas y el equipo necesario para que tu negocio soporte una facturación de 90k sin colapsar.",
    icon: "🏗️"
  },
  {
    title: "Optimización de Conversión Real",
    description: "Transformamos tu alcance en cashflow real. Estrategias de contenido diseñadas para vender, no solo para entretener.",
    icon: "💎"
  }
];

export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className="text-gradient">Nuestra Metodología</h2>
          <p className={styles.subtitle}>El sistema exacto que utilizamos para escalar negocios.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.card} glass`}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
