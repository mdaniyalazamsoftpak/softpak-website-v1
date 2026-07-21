import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import WhoWeServe from "@/components/home/WhoWeServe";
import Analytics from "@/components/home/Analytics";
import ExpertPerspective from "@/components/home/ExpertPerspective";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import Testimonials from "@/components/home/Testimonials";
import ContactUs from "@/components/home/ContactUs";
import PulseVideo from "@/components/home/PulseVideo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Services />
      <Stats />
      <PulseVideo />
      <WhoWeServe />
      <Analytics />
      <ExpertPerspective />
      <MeetTheTeam />
      <Testimonials />
      <ContactUs />
    </>
  );
}
