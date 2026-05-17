import { content, EXTERNAL_LINK } from "@/content";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";

export default function FeaturedProducts() {
  const featured = content.products.slice(0, 6);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-inter font-medium text-[#6B6B6B] uppercase tracking-widest mb-3">
            Produk Unggulan
          </p>
          <h2 className="section-title mb-4">Jelajahi Koleksi Kambing Kami</h2>
          <a
            href="/katalog"
            className="inline-block text-[#2D5A27] font-semibold hover:text-[#1E3D1A] transition-colors"
          >
            Lihat Semua Produk →
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-[#F7F5F2] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:translate-y-[-4px] group"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-[#F0EBE3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover filter sepia-[0.08] saturate-110 group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#2D5A27] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.badge}
                  </div>
                )}

                {/* Action Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#2D5A27] hover:text-white transition-all">
                    <Heart size={16} />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#2D5A27] hover:text-white transition-all">
                    <Eye size={16} />
                  </button>
                  <a
                    href={EXTERNAL_LINK}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#2D5A27] hover:text-white transition-all"
                  >
                    <ShoppingCart size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs font-inter font-medium text-[#6B6B6B] uppercase mb-1">
                  {product.category}
                </p>
                <h3 className="font-inter font-bold text-sm text-[#1A1A1A] mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "fill-[#F5A623] text-[#F5A623]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-inter font-bold text-[#1A1A1A]">
                    {product.rating}
                  </span>
                  <span className="text-xs text-[#6B6B6B]">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-inter font-bold text-sm text-[#2D7A22]">
                    Rp {(product.price / 1000000).toFixed(1)}jt
                  </span>
                  <span className="text-xs text-[#9B9B9B] line-through">
                    Rp {(product.originalPrice / 1000000).toFixed(1)}jt
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={EXTERNAL_LINK}
                  className="w-full block text-center bg-[#2D5A27] hover:bg-[#1E3D1A] text-white py-2 rounded-lg font-inter font-semibold text-xs transition-all"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
