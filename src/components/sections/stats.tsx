"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stats = [
  { value: "99.99%", label: "Uptime SLA", detail: "Enterprise-grade reliability" },
  { value: "2,000+", label: "Teams", detail: "Across 50+ countries" },
  { value: "<100ms", label: "Response Time", detail: "P99 latency globally" },
  { value: "10M+", label: "API Calls/Day", detail: "Processed seamlessly" },
];

export function Stats() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--primary)_0%,transparent_50%)] opacity-[0.03]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="group relative rounded-2xl border border-border/50 bg-card/80 p-8 text-center transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="font-[family-name:var(--font-plus-jakarta-sans)] text-4xl font-extrabold tracking-tight gradient-text sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-base font-semibold">{stat.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.detail}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
