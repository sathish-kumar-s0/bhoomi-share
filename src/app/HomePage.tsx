import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Calculator from "@/components/sections/Calculator";
import FeaturedDeals from "@/components/sections/FeaturedDeals";
import WhyInvest from "@/components/sections/WhyInvest";
import Rewards from "@/components/sections/Rewards";
import Trust from "@/components/sections/Trust";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-900">
      <Header />
      <main className="flex-1 space-y-0">
        <MobileStickyCTA />
        <FadeIn><Hero /></FadeIn>
        
        <div className="relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
            <FadeIn delay={0.2}><FeaturedDeals /></FadeIn>
        </div>

        <div className="relative z-10 bg-white">
            <FadeIn delay={0.2}><HowItWorks /></FadeIn>
        </div>

        <div className="relative z-10 shadow-premium">
            <FadeIn delay={0.2}><WhyInvest /></FadeIn>
        </div>

        <div className="relative z-0">
            <FadeIn delay={0.2}><Testimonials /></FadeIn>
        </div>

        <div className="relative z-10 bg-[#FAFAFA] shadow-[inset_0_20px_40px_rgba(0,0,0,0.02)]">
            <FadeIn delay={0.2}><Rewards /></FadeIn>
        </div>

        <div className="relative z-10 bg-white">
            <FadeIn delay={0.2}><Calculator /></FadeIn>
        </div>

        <div className="relative z-10 shadow-premium">
            <FadeIn delay={0.2}><About /></FadeIn>
        </div>

        <div className="relative z-10 bg-white">
            <FadeIn delay={0.2}><Contact /></FadeIn>
        </div>

        <div className="relative z-0">
            <FadeIn delay={0.2}><Trust /></FadeIn>
        </div>

        <div className="relative z-10 border-t border-slate-100">
            <FadeIn delay={0.2}><FAQ /></FadeIn>
        </div>

      </main>
      <Footer />
    </div>
  );
}
