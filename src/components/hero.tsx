"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#171614]">
      {/* Hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/church-hero-desktop.jpg"
          alt="Pneuma Anointed Ministry gathering"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#171614]/35" />

      {/* Slight left-to-right gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#171614]/65 via-[#171614]/30 to-[#171614]/25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#b08d57]" />

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#b08d57] sm:text-sm">
              PNEUMA ANOINTED MINISTRY
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-5xl font-[var(--font-cormorant)] text-6xl leading-[0.88] tracking-tight text-white sm:text-7xl lg:text-[8.5rem]"
          >
            The Place of Word,
            <br />
            Miracle &amp;
            <br />
            Transformation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="mt-10 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
          >
            Bringing men into the fullness of Christ&apos;s light through the
            Gospel of Love, Truth and Holiness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#who-we-are"
              className="inline-flex items-center justify-center gap-2 bg-[#b08d57] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#9c7c4d]"
            >
              Discover PAM
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/30 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Join Us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="mt-24 flex flex-col gap-8 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/55">
            Truth <span className="mx-2 text-[#b08d57]">•</span> Love{" "}
            <span className="mx-2 text-[#b08d57]">•</span> Holiness
          </p>

          <a
            href="#who-we-are"
            className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/60 transition hover:text-white"
          >
            Scroll to explore
            <ArrowDown size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}