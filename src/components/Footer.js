import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className="text-primary-gradient">Naim</span> Enterprises
          </div>
          <div className={styles.socials}>
            <a href="https://wa.me/5491133230965" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              WhatsApp
            </a>
            <a href="https://instagram.com/Naimlares" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Instagram
            </a>
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
