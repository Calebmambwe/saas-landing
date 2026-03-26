"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, floatingAnimation } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora Background */}
      <div className="aurora-bg absolute inset-0 -z-10" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_80%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Introducing Nexus AI — your workspace, supercharged</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="font-[family-name:var(--font-plus-jakarta-sans)] text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block">Build faster.</span>
          <span className="gradient-text block">Ship smarter.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Nexus brings your entire team together with AI-powered workflows, real-time collaboration,
          and beautiful interfaces that make work feel effortless.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-2xl shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110 active:scale-[0.98]"
          >
            Start for free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-all hover:border-border hover:bg-card hover:shadow-xl active:scale-[0.98]"
          >
            <Play className="h-4 w-4 text-primary" />
            Watch demo
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[
              "bg-gradient-to-br from-violet-400 to-indigo-600",
              "bg-gradient-to-br from-cyan-400 to-blue-600",
              "bg-gradient-to-br from-pink-400 to-rose-600",
              "bg-gradient-to-br from-amber-400 to-orange-600",
              "bg-gradient-to-br from-emerald-400 to-green-600",
            ].map((gradient, i) => (
              <div
                key={i}
                className={`h-10 w-10 rounded-full ${gradient} border-2 border-background ring-2 ring-background`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by <span className="font-semibold text-foreground">2,000+</span> teams worldwide
          </p>
        </motion.div>

        {/* Floating product mockup */}
        <motion.div
          variants={fadeInUp}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <motion.div
            animate={floatingAnimation}
            className="relative rounded-2xl border border-border/50 bg-card/80 p-2 shadow-2xl shadow-black/10 dark:shadow-black/40 backdrop-blur-sm"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 rounded-t-xl bg-muted/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="mx-auto flex h-7 w-64 items-center justify-center rounded-md bg-background/50 text-xs text-muted-foreground">
                app.nexus.dev
              </div>
            </div>

            {/* App screenshot placeholder */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-b-xl bg-gradient-to-br from-muted to-muted/50">
              {/* Dashboard mockup content */}
              <div className="absolute inset-0 p-6">
                {/* Sidebar */}
                <div className="flex h-full gap-6">
                  <div className="hidden w-48 flex-col gap-3 sm:flex">
                    {["Dashboard", "Projects", "Analytics", "Messages", "Settings"].map(
                      (item, i) => (
                        <div
                          key={item}
                          className={`h-9 rounded-lg px-3 flex items-center text-xs font-medium ${
                            i === 0
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-6 w-32 rounded bg-foreground/10" />
                      <div className="h-8 w-24 rounded-lg bg-primary/20" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="rounded-xl bg-background/50 p-4 space-y-2">
                          <div className="h-3 w-16 rounded bg-foreground/10" />
                          <div className="h-6 w-20 rounded bg-foreground/15 font-bold" />
                          <div className="h-2 w-full rounded-full bg-primary/20">
                            <div
                              className="h-2 rounded-full bg-primary/60"
                              style={{ width: `${40 + n * 15}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl bg-background/50 p-4 h-32">
                      <div className="flex h-full items-end gap-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 68].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary/80"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Glow effect behind mockup */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-cyan-500/20 opacity-50 blur-3xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
