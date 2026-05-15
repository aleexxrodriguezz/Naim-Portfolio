import styles from './Services.module.css';

const services = [
  {
    title: "Estrategia de Crecimiento",
    icon: "📈"
  },
  {
    title: "Adquisición de Clientes",
    description: "Estrategias de captación y optimización de conversión adaptadas al modelo de negocio de cada cliente.",
    icon: "🎯"
  },
  {
    title: "Automatización",
    description: "Implementación de procesos y estructura operativa para liberar cuellos de botella.",
    icon: "⚙️"
  },
  {
    title: "Acompañamiento 1:1",
    description: "Trabajo personalizado enfocado en el seguimiento de indicadores comerciales y operativos.",
    icon: "🤝"
  }
];

export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className="text-gradient">¿Qué hacemos?</h2>
          <p className={styles.subtitle}>Metodologías y procesos diseñados para mejorar la gestión comercial y operativa de negocios digitales.</p>
        </div>
        
        <div className={styles.list}>
          {services.map((service, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>{service.icon}</div>
              <div className={styles.text}>
                <h3>{service.title}</h3>
                <div className={`${styles.descPill} glass`}>
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
