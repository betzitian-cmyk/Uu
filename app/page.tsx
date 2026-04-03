import { HeroSection } from "@/components/home/hero-section";
import { FeaturedPlayers } from "@/components/home/featured-players";
import { UpcomingGames } from "@/components/home/upcoming-games";
import { LatestNews } from "@/components/home/latest-news";
import { StatsHighlight } from "@/components/home/stats-highlight";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPlayers />
      <UpcomingGames />
      <StatsHighlight />
      <LatestNews />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
