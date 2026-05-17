import { content, EXTERNAL_LINK } from "@/content";

export default function CategoriesSection() {
  return (
    <section className="bg-[#F7F5F2] py-20 px-4 relative overflow-hidden">
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 dot-pattern"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-inter font-medium text-[#6B6B6B] uppercase tracking-widest mb-3">
            Jenis-Jenis Kambing
          </p>
          <h2 className="section-title mb-4">
            {content.categories.subtitle}
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.categories.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-[#F0EBE3]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover filter sepia-[0.08] saturate-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-inter font-semibold text-lg text-[#1A1A1A] mb-2">
                  {item.name}
                </h3>
                <p className="font-inter text-sm text-[#6B6B6B] mb-4 line-clamp-2">
                  {item.description}
                </p>
                <a
                  href={EXTERNAL_LINK}
                  className="inline-block text-[#2D5A27] font-semibold text-sm hover:text-[#1E3D1A] transition-colors"
                >
                  Pelajari Lebih Lanjut →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
