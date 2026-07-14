import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import InfrastructureBanner from "@/components/home/InfrastructureBanner";
import PortfolioRebalancing from "@/components/home/PortfolioRebalancing";
import WhoWeServe from "@/components/home/WhoWeServe";
import Analytics from "@/components/home/Analytics";
import ExpertPerspective from "@/components/home/ExpertPerspective";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import Testimonials from "@/components/home/Testimonials";
import ContactUs from "@/components/home/ContactUs";
import PulseVideo from "@/components/home/PulseVideo";
import PulseVideoSection from "@/components/home/PulseVideoSection";

export default function HomePage() {
  return (
    <main className="relative bg-white">
      <Header />
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
      <Footer />
    </main>

    // <>
    //   <main>
    //     {/* <div className="relative w-full flex justify-center"> */}
    //     <div className="relative w-full h-0">
    //       <LogoStrip />
    //       <Header />
    //     </div>
    //     {/* </div> */}
    //     <div className="py-[220px] gap-[10px] bg-white">
    //       <Hero />
    //       <Services />
    //       {/* <Stats />
    //     <InfrastructureBanner />
    //     <PortfolioRebalancing />
    //     <WhoWeServe />
    //     <Analytics />
    //     <ExpertPerspective />
    //     <MeetTheTeam />
    //     <Testimonials />
    //     <ContactUs />
    //     <Footer /> */}
    //     </div>
    //   </main>
    // </>
  );
}
