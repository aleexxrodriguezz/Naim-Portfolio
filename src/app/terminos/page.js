import styles from './terminos.module.css';

export default function Terminos() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className="text-gradient">Términos y Condiciones</h1>
        <div className={styles.content}>
          <p>Última actualización: Mayo 2026</p>
          <h2>1. Introducción</h2>
          <p>Bienvenido a los servicios de consultoría de Naim (el "Consultor"). Al acceder a este sitio o contratar nuestros servicios, usted acepta cumplir con estos términos.</p>
          <h2>2. Servicios</h2>
          <p>El Consultor ofrece servicios de "Growth Partner" enfocados en el escalado de facturación basado en análisis de datos y acompañamiento 1:1.</p>
          <h2>3. Resultados</h2>
          <p>Si bien nos esforzamos por alcanzar los objetivos de facturación mencionados (60k-90k), los resultados pueden variar según el nicho, la audiencia y la ejecución por parte del cliente.</p>
          <h2>4. Privacidad</h2>
          <p>Toda la información compartida durante las sesiones de consultoría será tratada con absoluta confidencialidad.</p>
        </div>
        <a href="/" className={styles.backBtn}>Volver al Inicio</a>
      </div>
    </div>
  );
}
