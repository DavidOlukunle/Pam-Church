import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WhoWeAre from "@/components/who-we-are";
import OurStory from "@/components/our-story";
import SpiritualAssignment from "@/components/spiritual-assignment";
import Commission from "@/components/commission";
import Leadership from "@/components/leadership";
import Services from "@/components/services";
import PrayerCounselling from "@/components/prayer-counselling";
import Giving from "@/components/giving";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <WhoWeAre />

      <OurStory />

      <SpiritualAssignment />

        <Commission />

        <Leadership />

        <Services />

        <PrayerCounselling />

        <Giving />

        <FinalCta />

        <Footer />
    </main>
  );
}