import { ArrowUpRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#171614] px-6 py-28 text-white sm:py-36 lg:px-8">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#b08d57]/20" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#b08d57]/15" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b08d57]">
            Come Into The Light
          </p>

          <h2 className="mt-6 font-[var(--font-cormorant)] text-6xl leading-[0.95] sm:text-7xl lg:text-9xl">
            Know Christ.
            <br />
            Walk in His light.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Discover a community committed to the Gospel of Christ, the truth
            of God&apos;s Word, the love of Christ, and a life of holiness.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-[#b08d57] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#9c7c4d]"
            >
              Join Us
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#prayer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Connect With PAM
            </a>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-8">
          <p className="font-[var(--font-cormorant)] text-2xl text-white/60 sm:text-3xl">
            PAM — The Place of Word, Miracle and Transformation.
          </p>
        </div>
      </div>
    </section>
  );
}