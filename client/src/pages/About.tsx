import { content, EXTERNAL_LINK } from "@/content";
import { CheckCircle2, Users, Award, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Kualitas Premium",
      description:
        "Kami hanya menyediakan kambing berkualitas terbaik dengan sertifikat kesehatan lengkap.",
    },
    {
      icon: Users,
      title: "Layanan Terbaik",
      description:
        "Tim profesional kami siap membantu Anda 24/7 dengan konsultasi gratis.",
    },
    {
      icon: Globe,
      title: "Jangkauan Luas",
      description:
        "Pengiriman aman ke seluruh Indonesia dengan tracking real-time.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F2]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2D5A27] to-[#1E3D1A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-cormorant-garamond">
            Tentang Pasar Kambing Hidup
          </h1>
          <p className="text-lg text-[#C8D48A] font-inter">
            Penyedia kambing berkualitas premium dari Wonosobo, Indonesia
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Kisah Kami</h2>
          <div className="space-y-6 font-inter text-[#4A4A4A] leading-relaxed">
            <p>
              Pasar Kambing Hidup didirikan dengan visi untuk menyediakan kambing
              berkualitas premium kepada peternak dan pengusaha di seluruh
              Indonesia. Kami memahami bahwa kualitas kambing adalah kunci
              kesuksesan usaha peternakan Anda.
            </p>
            <p>
              Dengan pengalaman lebih dari 15 tahun di industri peternakan, kami
              telah membangun jaringan dengan peternak terbaik di Wonosobo,
              Jawa Tengah. Setiap kambing yang kami tawarkan telah melalui
              seleksi ketat dan pemeriksaan kesehatan menyeluruh.
            </p>
            <p>
              Komitmen kami adalah memberikan kambing sehat, produktif, dan
              terjamin kualitasnya. Kami juga menyediakan konsultasi gratis
              untuk membantu Anda memulai atau mengembangkan usaha peternakan
              kambing.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#F7F5F2] py-20 px-4 relative">
        <div className="absolute inset-0 dot-pattern"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="section-title text-center mb-16">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-[#EFF5EE] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-[#2D5A27]" />
                  </div>
                  <h3 className="font-inter font-bold text-lg text-[#1A1A1A] mb-3">
                    {value.title}
                  </h3>
                  <p className="font-inter text-sm text-[#6B6B6B]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">
            Mengapa Memilih Kami?
          </h2>
          <div className="space-y-4">
            {[
              "Kambing berkualitas premium dengan sertifikat kesehatan lengkap",
              "Harga kompetitif dengan kualitas terjamin",
              "Pengiriman aman ke seluruh Indonesia",
              "Konsultasi gratis untuk pemeliharaan kambing",
              "Garansi kesehatan kambing selama 30 hari",
              "Tim profesional siap membantu 24/7",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 size={24} className="text-[#2D5A27] flex-shrink-0" />
                <span className="font-inter text-[#1A1A1A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2D5A27] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-cormorant-garamond">
            Siap Memulai Usaha Peternakan Kambing?
          </h2>
          <p className="font-inter text-[#C8D48A] mb-8">
            Hubungi kami hari ini untuk konsultasi gratis dan penawaran khusus.
          </p>
          <a
            href={EXTERNAL_LINK}
            className="inline-block bg-[#C8821A] hover:bg-[#A66E16] text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
