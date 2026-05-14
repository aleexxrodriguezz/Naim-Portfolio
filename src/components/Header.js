import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <span className="text-primary-gradient">Growth</span>Partner
        </div>
        <nav className={styles.nav}>
          <a href="#servicios" className={styles.link}>Servicios</a>
          <a href="#casos" className={styles.link}>Casos de Éxito</a>
          <a href="#contacto" className={styles.btn}>Agendar Llamada</a>
        </nav>
      </div>
    </header>
  );
}
