import Hero from "@/shared/components/sections/hero";
import VenueCategories from "@/shared/components/sections/venue-categories";
import FeaturedVenues from "@/shared/components/sections/featured-venues";
import TrustedVendors from "@/shared/components/sections/trusted-vendors";
import GrowBusiness from "@/shared/components/sections/grow-business";
import PerfectVenue from "@/shared/components/sections/perfect-venue";
import Testimonials from "@/shared/components/sections/testimonials";
import ExceptionalDestinations from "@/shared/components/sections/exceptional-destinations";
import ListVenue from "@/shared/components/sections/list-venue";
import Footer from "@/shared/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <VenueCategories />
      <FeaturedVenues />
      <TrustedVendors />

      <GrowBusiness />
      <PerfectVenue />
      <Testimonials />

      <ExceptionalDestinations />
      <ListVenue />
      <Footer />
    </>
  );
}
