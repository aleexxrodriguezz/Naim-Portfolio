import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <span className="text-primary-gradient">Growth</span>Partner
        </div>
        <nav className={styles.nav}>
          <a href="/#servicios" className={styles.link}>Servicios</a>
          <a href="/testimonios" className={styles.link}>Testimonios</a>
          <a href="/#socio" className={styles.link}>El Socio</a>
          <a href="https://calendly.com/naimdario6/30min" target="_blank" rel="noopener noreferrer" className={styles.btn}>Agendar Consulta</a>
        </nav>
      </div>
    </header>
  );
}
