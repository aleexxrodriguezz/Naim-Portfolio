import styles from './terminos.module.css';

export default function Terminos() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className="text-gradient">Legales</h1>
        
        <div className={styles.content}>
          <section className={styles.legalSection}>
            <h2>TÉRMINOS Y CONDICIONES</h2>
            <p>Última actualización: Mayo 2026</p>
            <p>Bienvenido/a a nuestro sitio web. Al acceder y utilizar este sitio, aceptás cumplir con los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos, por favor no utilices este sitio.</p>
            
            <h3>1. Información General</h3>
            <p>Este sitio web tiene como finalidad presentar servicios de consultoría estratégica, crecimiento y escalamiento para negocios digitales e infoproductores.</p>
            <p>Los servicios pueden incluir:</p>
            <ul>
              <li>Consultoría estratégica</li>
              <li>Optimización de embudos de venta</li>
              <li>Estrategias de adquisición de clientes</li>
              <li>Automatizaciones y procesos</li>
              <li>Escalamiento de negocios digitales</li>
              <li>Mentorías y acompañamiento 1:1</li>
            </ul>

            <h3>2. Uso del Sitio</h3>
            <p>El usuario se compromete a utilizar este sitio web de forma lícita y adecuada, sin realizar actividades que puedan afectar el funcionamiento, seguridad o reputación del sitio. Queda prohibido: utilizar el sitio para actividades ilegales, intentar acceder sin autorización a sistemas o información, copiar o reproducir contenido sin autorización, y realizar acciones que afecten la disponibilidad del sitio.</p>

            <h3>3. Propiedad Intelectual</h3>
            <p>Todo el contenido presente en este sitio, incluyendo textos, diseños, logotipos, imágenes y materiales, es propiedad de la marca o cuenta con autorización para su uso. No está permitida la reproducción, distribución o utilización del contenido sin autorización previa por escrito.</p>

            <h3>4. Servicios y Resultados</h3>
            <p>Los servicios ofrecidos tienen carácter profesional y estratégico. Sin embargo, no se garantizan resultados específicos económicos, financieros o comerciales. Los resultados pueden variar según múltiples factores, incluyendo la ejecución, mercado, inversión publicitaria, experiencia previa y condiciones externas.</p>

            <h3>5. Limitación de Responsabilidad</h3>
            <p>No seremos responsables por pérdidas económicas indirectas, interrupciones del sitio web, problemas derivados de plataformas externas o resultados comerciales no alcanzados. El uso de este sitio y de los servicios ofrecidos es bajo responsabilidad del usuario.</p>
          </section>

          <section className={styles.legalSection}>
            <h2>POLÍTICA DE PRIVACIDAD</h2>
            <p>La presente Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal proporcionada por los usuarios.</p>
            <h3>1. Información que recopilamos</h3>
            <p>Podemos recopilar: Nombre y apellido, dirección de correo electrónico, número de teléfono, información relacionada con consultas comerciales y datos enviados voluntariamente.</p>
            <h3>2. Uso de la información</h3>
            <p>La información recopilada puede utilizarse para responder consultas, brindar información sobre servicios, coordinar reuniones, mejorar la experiencia del usuario y cumplir obligaciones legales.</p>
          </section>

          <section className={styles.legalSection}>
            <h2>POLÍTICA DE REEMBOLSOS</h2>
            <p>Debido a la naturaleza digital y estratégica de los servicios ofrecidos, los pagos realizados no son reembolsables una vez iniciado el servicio, mentoría, consultoría o proceso de acompañamiento. En caso de existir situaciones excepcionales, estas serán evaluadas individualmente.</p>
          </section>

          <section className={styles.legalSection}>
            <h2>DISCLAIMER DE RESULTADOS</h2>
            <p>No garantizamos resultados económicos específicos, niveles de facturación, ingresos o crecimiento determinado. Cualquier ejemplo o caso de éxito tiene fines ilustrativos y no representa una promesa o garantía.</p>
          </section>
        </div>

        <a href="/" className={styles.backBtn}>Volver al Inicio</a>
      </div>
    </div>
  );
}
