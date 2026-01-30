import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhyGiveat } from '@/components/WhyGiveat';
import { Experience } from '@/components/Experience';
import { AppLaunch } from '@/components/AppLaunch';
import { Partner } from '@/components/Partner';
import { Footer } from '@/components/Footer';
// import { ArrowRight, Check, Instagram, Mail, Phone, MapPin } from 'react-feather';
import '@/components/animations.css';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />

      <Hero />
      <About />
      <WhyGiveat />
      <Experience />
      <AppLaunch />
      <Partner />

      <Footer />
    </div>
  );
}
