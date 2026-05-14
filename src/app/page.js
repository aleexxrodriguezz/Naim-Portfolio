import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partner from '@/components/Partner';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Partner />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
