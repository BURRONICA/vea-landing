import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackingBanner } from "@/components/tracking-banner";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <TrackingBanner />
      </main>
      <SiteFooter />
    </>
  );
}
