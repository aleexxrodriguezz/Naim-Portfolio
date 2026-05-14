import styles from './Services.module.css';

const services = [
  {
    title: "Estrategia de Crecimiento",
    description: "Optimización de procesos y escalamiento comercial para negocios digitales.",
    icon: "📈"
  },
  {
    title: "Adquisición de Clientes",
    description: "Sistemas de captación y optimización de conversión diseñados para escalar.",
    icon: "🎯"
  },
  {
    title: "Automatización",
    description: "Implementación de procesos y estructura operativa para liberar cuellos de botella.",
    icon: "⚙️"
  },
  {
    title: "Acompañamiento 1:1",
    description: "Trabajo personalizado enfocado en crecimiento sostenible y resultados medibles.",
    icon: "🤝"
  }
];

export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className="text-gradient">¿Qué hacemos?</h2>
          <p className={styles.subtitle}>Sistemas probados para transformar tu operación comercial.</p>
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
