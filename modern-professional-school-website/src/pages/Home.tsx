import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import LatestNews from "../components/home/LatestNews";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <LatestNews />
      <CTA />
    </>
  );
}
