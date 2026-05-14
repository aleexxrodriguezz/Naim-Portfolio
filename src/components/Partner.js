import styles from './Partner.module.css';

export default function Partner() {
  return (
    <section id="naim" className={styles.partner}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          <div className={`${styles.imagePlaceholder} glass`}>
            {/* Aquí iría la foto de Naim */}
            <span className={styles.initial}>N</span>
          </div>
        </div>
        <div className={styles.content}>
          <h2 className="text-gradient">El Socio que tu Negocio Necesita</h2>
          <h3 className={styles.name}>Naim — Growth Partner</h3>
          <p className={styles.bio}>
            No soy una agencia más. Soy tu socio estratégico. Me meto en las entrañas de tu negocio para entender qué funciona y qué no. 
          </p>
          <p className={styles.bio}>
            Mi metodología se basa en <strong>Data Real</strong>. Si estás estancado en la barrera de los 10-30k, es porque tus sistemas actuales ya no escalan. Mi trabajo es construir la infraestructura necesaria para llevarte a los 90k sin que tu operación colapse.
          </p>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.check}>✓</span> Consultoría 1:1 Directa
            </div>
            <div className={styles.highlight}>
              <span className={styles.check}>✓</span> Optimización Basada en Data
            </div>
            <div className={styles.highlight}>
              <span className={styles.check}>✓</span> Foco 100% en Facturación
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
