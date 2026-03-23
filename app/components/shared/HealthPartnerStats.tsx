"use client";

import { stats } from "@/app/data/siteData";
import CounterAnimation from "../animations/CounterAnimation";
import FadeIn from "../animations/FadeIn";

export default function HealthPartnerStats() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Our Achievements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              The Health Partner You&apos;ve Been Looking For
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.15}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <CounterAnimation
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
