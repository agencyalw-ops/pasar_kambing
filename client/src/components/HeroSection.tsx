import { content, EXTERNAL_LINK } from "@/content";

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/manus-storage/hero-goat_f9483b37.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-cormorant-garamond">
          {content.hero.title}
        </h1>
        <p className="text-lg md:text-xl mb-8 font-inter font-light">
          {content.hero.subtitle}
        </p>
        <a
          href={EXTERNAL_LINK}
          className="inline-block bg-[#C8821A] hover:bg-[#A66E16] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
        >
          {content.hero.cta}
        </a>
      </div>
    </div>
  );
}
