
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";

export default function FinalCta() {
  return (
    <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#171614] px-6 py-24 sm:min-h-[580px] lg:min-h-[650px] lg:px-8">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/church-fellowship.jpg"
          alt="The PAM congregation gathered together"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Image overlays */}
      <div className="absolute inset-0 -z-10 bg-[#171614]/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#171614]/65 via-[#171614]/30 to-transparent" />

      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#b08d57]" />
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c7a46c]">
                Your Journey of Faith
              </p>
            </div>

            <h2 className="mt-8 font-[var(--font-cormorant)] text-6xl leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Come Into
              <br />
              The Light.
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
              Know Christ. Walk in His light. Discover the life
              and transformation found in the Gospel.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 bg-[#b08d57] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#9c7c4d]"
              >
                Join Us
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#prayer"
                className="inline-flex items-center justify-center gap-3 border border-white/35 px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Connect With PAM
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Decorative accent */}
      <div className="pointer-events-none absolute bottom-8 right-6 hidden text-right sm:block lg:right-12">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Truth <span className="text-[#b08d57]">•</span> Love{" "}
          <span className="text-[#b08d57]">•</span> Holiness
        </p>
      </div>
    </section>
  );
}