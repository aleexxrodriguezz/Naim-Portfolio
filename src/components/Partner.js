import styles from './Partner.module.css';

export default function Partner() {
  return (
    <section id="socio" className={styles.partner}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.imageArea} animate-reveal`}>
          <div className={styles.imageWrapper}>
            <span>N</span>
            <div className={styles.experienceBadge}>
              <span>+3</span>
              <p>Años Escalando</p>
            </div>
          </div>
        </div>
        
        <div className={`${styles.content} animate-reveal delay-1`}>
          <h2 className="text-gradient">Tu socio estratégico de crecimiento</h2>
          <p className={styles.description}>
            No soy una agencia convencional. Me convierto en una extensión de tu equipo, involucrándome 1:1 en las entrañas de tu operación para identificar y eliminar cuellos de botella.
          </p>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📊</div>
              <div>
                <h4>Decisiones Basadas en Data</h4>
                <p>Analizamos cada métrica de tu embudo para escalar lo que funciona y cortar lo que no.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🏗️</div>
              <div>
                <h4>Infraestructura de Escalado</h4>
                <p>Construimos los sistemas necesarios para que tu negocio soporte los 90k/mes sin colapsar.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>💎</div>
              <div>
                <h4>Acompañamiento 1:1</h4>
                <p>Acceso directo a mi consultoría para resolver problemas complejos en tiempo real.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
