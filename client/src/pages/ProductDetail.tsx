import { content, EXTERNAL_LINK } from "@/content";
import { Star, Heart, Minus, Plus, Share2 } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("30ml");
  const [activeTab, setActiveTab] = useState("description");

  const product = {
    name: "Kambing Etawa Premium",
    category: "Perah",
    price: 5000000,
    originalPrice: 6000000,
    rating: 4.8,
    reviews: 245,
    inStock: true,
    description:
      "Kambing Etawa berkualitas premium dengan produktivitas susu tinggi. Dipilih khusus dari peternakan terbaik di Wonosobo dengan kesehatan terjamin.",
    features: [
      "Kesehatan terjamin dengan sertifikat veteriner",
      "Produktivitas susu hingga 3 liter per hari",
      "Umur 2-3 tahun, siap berproduksi",
      "Pengiriman aman ke seluruh Indonesia",
    ],
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      {/* Breadcrumb */}
      <div className="bg-[#F7F5F2] py-7 px-4 border-b border-[#E8E4DF] relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
            <a href="/" className="hover:text-[#2D5A27]">
              Beranda
            </a>
            <span>/</span>
            <a href={EXTERNAL_LINK} className="hover:text-[#2D5A27]">
              Produk
            </a>
            <span>/</span>
            <span className="text-[#1A1A1A]">Detail Produk</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Image Gallery */}
            <div>
              <div className="relative aspect-square bg-[#F0EBE3] rounded-2xl overflow-hidden mb-4">
                <img
                  src="/manus-storage/goat-etawa_196dfb3b.png"
                  alt={product.name}
                  className="w-full h-full object-cover filter sepia-[0.08] saturate-110"
                />
                <button className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-[#E8E4DF] rounded-full flex items-center justify-center hover:bg-gray-50">
                  ←
                </button>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-[#E8E4DF] rounded-full flex items-center justify-center hover:bg-gray-50">
                  →
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-20 h-20 bg-[#F0EBE3] rounded-lg overflow-hidden border-2 border-transparent hover:border-[#2D5A27] cursor-pointer"
                  >
                    <img
                      src="/manus-storage/goat-etawa_196dfb3b.png"
                      alt={`Thumbnail ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div>
              <p className="text-xs font-inter font-medium text-[#6B6B6B] uppercase tracking-widest mb-2">
                {product.category}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="product-name">{product.name}</h1>
                <span className="border border-[#2D5A27] text-[#2D5A27] rounded-full px-3 py-1 text-xs font-semibold">
                  Tersedia
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#F5A623] text-[#F5A623]"
                    />
                  ))}
                </div>
                <span className="font-inter font-bold text-sm text-[#1A1A1A]">
                  {product.rating}
                </span>
                <span className="font-inter text-xs text-[#6B6B6B]">
                  ({product.reviews} Ulasan)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-inter font-bold text-2xl text-[#2D7A22]">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
                <span className="font-inter text-lg text-[#9B9B9B] line-through">
                  Rp {product.originalPrice.toLocaleString("id-ID")}
                </span>
              </div>

              {/* Description */}
              <p className="body-description mb-6">{product.description}</p>

              {/* Size/Volume Selector */}
              <div className="mb-6">
                <label className="font-inter font-semibold text-sm text-[#1A1A1A] block mb-3">
                  Umur Kambing
                </label>
                <div className="flex gap-2">
                  {["2 tahun", "2.5 tahun", "3 tahun"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full border font-inter text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "bg-[#2D5A27] text-white border-[#2D5A27]"
                          : "bg-transparent border-[#D0CCC6] text-[#4A4A4A] hover:border-[#2D5A27]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + CTA */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center border border-[#E8E4DF] rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center hover:bg-[#EFF5EE]"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 h-8 flex items-center justify-center font-inter font-bold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-[#EFF5EE]"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <a
                  href={EXTERNAL_LINK}
                  className="flex-1 btn-primary text-center"
                >
                  Tambah ke Keranjang
                </a>
                <a
                  href={EXTERNAL_LINK}
                  className="flex-1 btn-gold text-center"
                >
                  Beli Sekarang
                </a>
                <button className="w-10 h-10 border border-[#E8E4DF] rounded-lg flex items-center justify-center hover:bg-gray-50">
                  <Heart size={18} className="text-[#6B6B6B]" />
                </button>
              </div>

              {/* Meta Info */}
              <div className="border-t border-[#E8E4DF] pt-4 space-y-2 text-sm font-inter text-[#6B6B6B]">
                <p>
                  <span className="font-semibold">SKU:</span> ETAWA-2024-001
                </p>
                <p>
                  <span className="font-semibold">Tags:</span> Kambing Etawa,
                  Perah, Premium
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Bagikan:</span>
                  <button className="hover:text-[#2D5A27]">
                    <Share2 size={16} />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white border-t border-[#E8E4DF] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tab Bar */}
          <div className="flex gap-8 border-b border-[#E8E4DF] mb-8">
            {["description", "information", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-inter font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? "text-[#1A1A1A] border-b-2 border-[#1A1A1A]"
                    : "text-[#6B6B6B] hover:text-[#1A1A1A]"
                }`}
              >
                {tab === "description"
                  ? "Deskripsi"
                  : tab === "information"
                    ? "Informasi Tambahan"
                    : "Ulasan"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in">
            {activeTab === "description" && (
              <div className="space-y-4">
                <p className="body-description">
                  Kambing Etawa adalah jenis kambing perah terbaik yang berasal
                  dari India. Kami menyediakan kambing Etawa berkualitas premium
                  yang telah dipilih khusus dari peternakan terbaik di Wonosobo.
                </p>
                <p className="body-description">
                  Setiap kambing telah melalui pemeriksaan kesehatan menyeluruh
                  dan memiliki sertifikat veteriner. Kami menjamin kualitas dan
                  kesehatan setiap kambing yang kami jual.
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2D5A27] font-bold">•</span>
                      <span className="body-description">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "information" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-inter font-semibold text-[#1A1A1A]">
                      Jenis
                    </p>
                    <p className="font-inter text-[#6B6B6B]">Kambing Etawa</p>
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-[#1A1A1A]">
                      Umur
                    </p>
                    <p className="font-inter text-[#6B6B6B]">2-3 Tahun</p>
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-[#1A1A1A]">
                      Berat
                    </p>
                    <p className="font-inter text-[#6B6B6B]">60-80 kg</p>
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-[#1A1A1A]">
                      Produktivitas Susu
                    </p>
                    <p className="font-inter text-[#6B6B6B]">3 liter/hari</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                <p className="body-description">
                  Belum ada ulasan untuk produk ini. Jadilah yang pertama
                  memberikan ulasan!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
