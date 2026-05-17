import { content, EXTERNAL_LINK } from "@/content";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src="/manus-storage/goat-kacang_1e254f2e.png"
              alt="Pasar Kambing Hidup"
              className="w-full rounded-2xl shadow-lg filter sepia-[0.08] saturate-110"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2D5A27] rounded-2xl opacity-10"></div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-sm font-inter font-medium text-[#6B6B6B] uppercase tracking-widest mb-3">
              Tentang Kami
            </p>
            <h2 className="section-title mb-6">{content.about.title}</h2>
            <p className="font-inter text-[#4A4A4A] leading-relaxed mb-8">
              {content.about.description}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {content.about.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#2D5A27] flex-shrink-0 mt-1" />
                  <span className="font-inter text-[#1A1A1A]">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={EXTERNAL_LINK}
              className="inline-block btn-primary"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
