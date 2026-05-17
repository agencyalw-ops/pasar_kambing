import AnnouncementBar from "@/components/AnnouncementBar";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

/**
 * Home Page - Pasar Kambing Hidup Landing Page
 * Design Philosophy: Premium, organic, and professional livestock marketplace
 * Features: Hero section, product categories, featured products, about, trust badges, and footer
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* About Section */}
      <AboutSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Footer */}
      <Footer />
    </div>
  );
}
