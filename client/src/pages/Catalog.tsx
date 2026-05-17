import { content, EXTERNAL_LINK } from "@/content";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";

export default function Catalog() {
  const [location] = useLocation();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 10000000]);

  // Get type from URL query
  const urlParams = new URLSearchParams(window.location.search);
  const typeFromUrl = urlParams.get("type");

  const filteredProducts = useMemo(() => {
    let filtered = content.products;

    // Filter by type
    const activeType = selectedType || typeFromUrl;
    if (activeType) {
      filtered = filtered.filter((p) => p.type === activeType);
    }

    // Filter by price
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedType, typeFromUrl, sortBy, priceRange]);

  const types = [
    { id: "etawa", label: "Kambing Etawa", count: content.products.filter((p) => p.type === "etawa").length },
    { id: "jawa", label: "Kambing Jawa", count: content.products.filter((p) => p.type === "jawa").length },
    { id: "kacang", label: "Kambing Kacang", count: content.products.filter((p) => p.type === "kacang").length },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2D5A27] to-[#1E3D1A] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 font-cormorant-garamond">
            Katalog Kambing
          </h1>
          <p className="text-[#C8D48A] font-inter">
            Pilih kambing berkualitas premium sesuai kebutuhan Anda
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                {/* Type Filter */}
                <div className="mb-8">
                  <h3 className="font-inter font-bold text-lg text-[#1A1A1A] mb-4">
                    Jenis Kambing
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedType(null)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-inter text-sm transition-all ${
                        !selectedType && !typeFromUrl
                          ? "bg-[#2D5A27] text-white"
                          : "text-[#6B6B6B] hover:bg-[#F7F5F2]"
                      }`}
                    >
                      Semua Jenis ({content.products.length})
                    </button>
                    {types.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg font-inter text-sm transition-all ${
                          selectedType === type.id || typeFromUrl === type.id
                            ? "bg-[#2D5A27] text-white"
                            : "text-[#6B6B6B] hover:bg-[#F7F5F2]"
                        }`}
                      >
                        {type.label} ({type.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-8 pb-8 border-b border-[#E8E4DF]">
                  <h3 className="font-inter font-bold text-lg text-[#1A1A1A] mb-4">
                    Harga
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-[#6B6B6B]">
                      <span>Rp {(priceRange[0] / 1000000).toFixed(1)}jt</span>
                      <span>Rp {(priceRange[1] / 1000000).toFixed(1)}jt</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10000000"
                      step="500000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h3 className="font-inter font-bold text-lg text-[#1A1A1A] mb-4">
                    Urutkan
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border border-[#E8E4DF] rounded-lg font-inter text-sm focus:outline-none focus:border-[#2D5A27]"
                  >
                    <option value="newest">Terbaru</option>
                    <option value="price-low">Harga: Rendah ke Tinggi</option>
                    <option value="price-high">Harga: Tinggi ke Rendah</option>
                    <option value="rating">Rating Tertinggi</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <p className="font-inter text-sm text-[#6B6B6B]">
                  Menampilkan {filteredProducts.length} produk
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:translate-y-[-4px] group"
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
                        <span className="text-xs text-[#6B6B6B]">
                          ({product.reviews})
                        </span>
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

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="font-inter text-[#6B6B6B]">
                    Tidak ada produk yang sesuai dengan filter Anda
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
