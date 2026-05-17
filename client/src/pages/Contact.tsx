import { content, EXTERNAL_LINK } from "@/content";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to external link
    window.location.href = EXTERNAL_LINK;
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2D5A27] to-[#1E3D1A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-cormorant-garamond">
            Hubungi Kami
          </h1>
          <p className="text-lg text-[#C8D48A] font-inter">
            Kami siap membantu Anda dengan pertanyaan atau pesanan
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-[#F7F5F2] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#2D5A27] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="font-inter font-bold text-lg text-[#1A1A1A] mb-2">
                Telepon
              </h3>
              <p className="font-inter text-[#6B6B6B]">
                {content.footer.phone}
              </p>
              <p className="font-inter text-sm text-[#6B6B6B] mt-2">
                Tersedia 24/7
              </p>
            </div>

            {/* Email */}
            <div className="bg-[#F7F5F2] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#C8821A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="font-inter font-bold text-lg text-[#1A1A1A] mb-2">
                Email
              </h3>
              <p className="font-inter text-[#6B6B6B]">
                {content.footer.email}
              </p>
              <p className="font-inter text-sm text-[#6B6B6B] mt-2">
                Balas dalam 24 jam
              </p>
            </div>

            {/* Address */}
            <div className="bg-[#F7F5F2] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#1E3D1A] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-white" />
              </div>
              <h3 className="font-inter font-bold text-lg text-[#1A1A1A] mb-2">
                Lokasi
              </h3>
              <p className="font-inter text-[#6B6B6B]">
                {content.footer.address}
              </p>
              <p className="font-inter text-sm text-[#6B6B6B] mt-2">
                Kunjungi kami
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="section-title text-center mb-8">Kirim Pesan</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-inter font-semibold text-[#1A1A1A] mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E8E4DF] rounded-lg font-inter focus:outline-none focus:border-[#2D5A27]"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-inter font-semibold text-[#1A1A1A] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E8E4DF] rounded-lg font-inter focus:outline-none focus:border-[#2D5A27]"
                  placeholder="Masukkan email Anda"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-inter font-semibold text-[#1A1A1A] mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#E8E4DF] rounded-lg font-inter focus:outline-none focus:border-[#2D5A27]"
                  placeholder="Masukkan nomor telepon"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-inter font-semibold text-[#1A1A1A] mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[#E8E4DF] rounded-lg font-inter focus:outline-none focus:border-[#2D5A27]"
                  placeholder="Tulis pesan Anda di sini"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#F7F5F2] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Lokasi Kami</h2>
          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-600 font-inter">
              Peta akan ditampilkan di sini
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
