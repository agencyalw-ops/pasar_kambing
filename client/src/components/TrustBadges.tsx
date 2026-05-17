import { content } from "@/content";
import { Package, CreditCard, Headphones } from "lucide-react";

const iconMap = {
  box: Package,
  "credit-card": CreditCard,
  headset: Headphones,
};

export default function TrustBadges() {
  return (
    <section className="bg-white border-t border-[#E8E4DF] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-12 flex-wrap">
          {content.trustBadges.map((badge, index) => {
            const Icon = iconMap[badge.icon as keyof typeof iconMap];
            return (
              <div key={index} className="flex items-start gap-4 flex-1 min-w-64">
                <div className="w-12 h-12 bg-[#EFF5EE] rounded-full flex items-center justify-center flex-shrink-0">
                  {Icon && <Icon size={24} className="text-[#2D5A27]" />}
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-[#1A1A1A] mb-1">
                    {badge.title}
                  </h3>
                  <p className="font-inter text-sm text-[#6B6B6B]">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
