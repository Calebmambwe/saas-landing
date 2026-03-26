"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-cyan-500 p-12 text-center sm:p-20"
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10">
            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-plus-jakarta-sans)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ready to transform
              <br />
              how your team works?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80"
            >
              Join 2,000+ teams already using Nexus. Start free — no credit card required.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-2xl transition-all hover:shadow-white/25 hover:brightness-95 active:scale-[0.98]"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
