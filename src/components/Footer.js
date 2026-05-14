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
          <p>©️ {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className={styles.legalNotice}>
            El contenido de este sitio tiene fines informativos y comerciales. Los resultados pueden variar según cada caso. 
            Al utilizar este sitio aceptás nuestros <a href="/terminos">Términos y Condiciones</a> y <a href="/terminos">Política de Privacidad</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
