"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarGradient: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Nexus transformed how our engineering team collaborates. We shipped 3x faster in the first quarter. The AI workflows alone saved us 20 hours per week.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow",
    avatarGradient: "from-violet-400 to-indigo-600",
  },
  {
    quote:
      "The analytics dashboard gives us insights we never had before. We can now predict bottlenecks before they happen and keep our team moving.",
    name: "Marcus Johnson",
    role: "Product Lead",
    company: "ScaleUp",
    avatarGradient: "from-cyan-400 to-blue-600",
  },
  {
    quote:
      "We evaluated 12 tools before choosing Nexus. Nothing else comes close in terms of design quality, performance, and developer experience.",
    name: "Emily Rodriguez",
    role: "CTO",
    company: "DataVerse",
    avatarGradient: "from-pink-400 to-rose-600",
  },
  {
    quote:
      "Moving our team to Nexus was the best decision we made this year. Onboarding was seamless and our productivity metrics are through the roof.",
    name: "David Park",
    role: "Engineering Manager",
    company: "CloudNine",
    avatarGradient: "from-amber-400 to-orange-600",
  },
  {
    quote:
      "The enterprise security features gave our compliance team peace of mind. SOC 2, SSO, and granular permissions — all out of the box.",
    name: "Lisa Wang",
    role: "Head of Security",
    company: "FinSecure",
    avatarGradient: "from-emerald-400 to-green-600",
  },
  {
    quote:
      "Nexus's API is a dream to work with. We built our custom integration in a single afternoon. The documentation is world-class.",
    name: "Alex Rivera",
    role: "Senior Developer",
    company: "BuildCo",
    avatarGradient: "from-fuchsia-400 to-purple-600",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-muted/30" />

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
            Testimonials
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 font-[family-name:var(--font-plus-jakarta-sans)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Loved by teams worldwide
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            See why thousands of teams trust Nexus to power their workflows.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mt-20"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 p-8 transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-6">
                <div
                  className={`h-10 w-10 shrink-0 rounded-full bg-gradient-to-br ${testimonial.avatarGradient}`}
                />
                <div>
                  <div className="text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
