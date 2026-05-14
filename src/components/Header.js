import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} glass`}>
        <div className={styles.logo}>
          <a href="/">
            <span className="text-primary">Naim</span> Enterprises
          </a>
        </div>
        <nav className={styles.nav}>
          <a href="/testimonios" className={styles.link}>Testimonios</a>
          <a href="https://calendly.com/naimdario6/30min" target="_blank" rel="noopener noreferrer" className={styles.btn}>Agendar Consulta</a>
        </nav>
      </div>
    </header>
  );
}
