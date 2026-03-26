"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals and small projects getting started.",
    features: [
      "Up to 5 team members",
      "10 GB storage",
      "Basic analytics",
      "Community support",
      "API access",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams that need powerful collaboration tools.",
    features: [
      "Unlimited team members",
      "100 GB storage",
      "Advanced analytics & reports",
      "Priority email support",
      "AI-powered workflows",
      "Custom integrations",
      "SSO authentication",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need full control and dedicated support.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Custom AI model training",
      "Dedicated account manager",
      "99.99% uptime SLA",
      "On-premise deployment",
      "Custom contracts",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Pricing
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 font-[family-name:var(--font-plus-jakarta-sans)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            No hidden fees. No surprises. Start free and scale as you grow.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3 sm:mt-20"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeInUp}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                tier.highlighted
                  ? "border-primary/50 bg-card shadow-2xl shadow-primary/10 scale-[1.02] lg:scale-105"
                  : "border-border/50 bg-card/50 hover:border-border hover:shadow-lg"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/25">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-plus-jakarta-sans)] text-xl font-bold">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-8">
                <span className="font-[family-name:var(--font-plus-jakarta-sans)] text-5xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-muted-foreground">{tier.period}</span>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block rounded-full py-3 text-center text-sm font-semibold transition-all active:scale-[0.98] ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
