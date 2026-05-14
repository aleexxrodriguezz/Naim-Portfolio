import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className="text-primary-gradient">Growth</span>Partner
            <p className={styles.desc}>Potenciando creadores y marcas para dominar su industria.</p>
          </div>
          <div className={styles.links}>
            <a href="#servicios">Servicios</a>
            <a href="#casos">Casos de Éxito</a>
            <a href="#contacto">Contacto</a>
            <a href="/terminos">Términos y Condiciones</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Growth Partner. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
