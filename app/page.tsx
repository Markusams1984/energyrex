import { Hero, HeroElectric } from '@/components/hero';
import styles from '@/components/hero/hero.module.css';

export default function Home() {
  return (
    <main className={`${styles.hero} relative flex flex-1 flex-col overflow-hidden`}>
      <div
        className={`${styles.grid} pointer-events-none absolute inset-0`}
        aria-hidden="true"
      />

      <HeroElectric />
      <Hero />
    </main>
  );
}
