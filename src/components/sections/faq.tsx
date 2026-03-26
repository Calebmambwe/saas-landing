"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    question: "How does the free plan work?",
    answer:
      "The Starter plan is completely free forever with up to 5 team members. No credit card required. You get access to core features including basic analytics, 10 GB storage, and community support.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. Downgrades take effect at the start of your next billing period.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Starter plans get community support. Pro plans include priority email support with a 4-hour response time. Enterprise customers get a dedicated account manager and 24/7 phone support.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We're SOC 2 Type II certified and use end-to-end encryption for all data in transit and at rest. Enterprise customers can also opt for on-premise deployment for complete data sovereignty.",
  },
  {
    question: "Do you offer a free trial for Pro?",
    answer:
      "Yes! Every Pro plan comes with a 14-day free trial. No credit card required to start. You'll have full access to all Pro features during the trial period.",
  },
  {
    question: "How does the AI workflow automation work?",
    answer:
      "Our AI analyzes your team's patterns and suggests automations for repetitive tasks. You can approve, customize, or create your own workflows. The AI learns and improves over time based on your team's usage.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 font-[family-name:var(--font-plus-jakarta-sans)] text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Frequently asked questions
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={fadeInUp}
              className="rounded-xl border border-border/50 bg-card/50 transition-all hover:border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 text-sm font-semibold sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
