import { Backdrop } from "@/components/backdrop";
import { Hero, HeroElectric } from "@/components/hero";

export default function Home() {
  return (
    <Backdrop as="main">
      <HeroElectric />
      <Hero />
    </Backdrop>
  );
}
