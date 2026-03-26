"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Shield,
  Zap,
  BarChart3,
  Users,
  Layers,
  Globe,
  Lock,
  Cpu,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Sub-100ms response times across all endpoints. Built on edge infrastructure for speed that feels instant.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption. Your data never leaves your control.",
  },
  {
    icon: Workflow,
    title: "AI Workflows",
    description:
      "Automate repetitive tasks with AI-powered workflows that learn from your team's patterns.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Real-time dashboards with predictive insights. Make data-driven decisions with confidence.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Real-time editing, comments, and approvals. Work together as if you're in the same room.",
  },
  {
    icon: Layers,
    title: "Seamless Integrations",
    description:
      "Connect with 200+ tools your team already uses. One-click setup, zero configuration.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description:
      "Content delivered from 200+ edge locations worldwide. Your app is fast everywhere.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description:
      "Granular permissions with SSO support. Control who sees what with precision.",
  },
  {
    icon: Cpu,
    title: "Developer API",
    description:
      "RESTful & GraphQL APIs with comprehensive SDKs. Build custom integrations effortlessly.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
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
            Features
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 font-[family-name:var(--font-plus-jakarta-sans)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Everything you need to{" "}
            <span className="gradient-text">scale your team</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            Powerful features that grow with your business. No compromises, no hidden limits.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:mt-20"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-plus-jakarta-sans)] text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
