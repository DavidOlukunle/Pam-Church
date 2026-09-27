import { ArrowUpRight, Phone } from "lucide-react";

export default function PrayerCounselling() {
  return (
    <section
      id="prayer"
      className="bg-[#f7f4ee] px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden bg-[#171614]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Main message */}
            <div className="px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b08d57]">
                Prayer & Counselling
              </p>

              <h2 className="mt-6 max-w-3xl font-[var(--font-cormorant)] text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                You don&apos;t have to walk through it alone.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                If you need prayer, spiritual guidance, or someone to speak
                with, the PAM team is available to connect with you.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+2348065899854"
                  className="inline-flex items-center justify-center gap-2 bg-[#b08d57] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#9c7c4d]"
                >
                  <Phone size={17} />
                  Call for Prayer
                </a>

                <a
                  href="#give"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Contact PAM
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            {/* Side statement */}
            <div className="flex items-end border-t border-white/10 bg-[#211f1c] px-6 py-12 sm:px-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-16">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Our Heart
                </p>

                <p className="mt-6 font-[var(--font-cormorant)] text-3xl leading-tight text-white sm:text-4xl">
                  We desire to see people know Christ, grow in truth, and walk
                  in the reality of their new life in Him.
                </p>

                <div className="mt-8 h-px w-12 bg-[#b08d57]" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact note */}
        <div className="mt-8 flex flex-col gap-2 text-sm text-[#24211d]/50 sm:flex-row sm:items-center sm:justify-between">
          <span>Prayer & counselling line</span>

          <span className="text-[#24211d]/70">
            +234 8065899854 / +234 7011124869
          </span>
        </div>
      </div>
    </section>
  );
}