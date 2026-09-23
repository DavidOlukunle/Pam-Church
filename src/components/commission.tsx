import { ArrowDownRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Truth",
    text: "We preach Christ and remain anchored in the truth of God's Word.",
  },
  {
    number: "02",
    title: "Love",
    text: "We demonstrate the love of Christ and allow His life to be expressed through us.",
  },
  {
    number: "03",
    title: "Holiness",
    text: "We call people into a life that reflects the reality of their new life in Christ.",
  },
];

export default function Commission() {
  return (
    <section
      id="commission"
      className="bg-[#171614] px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b08d57]">
              The Burden of the Commission
            </p>

            <div className="mt-6 h-px w-16 bg-[#b08d57]" />
          </div>

          <div>
            <h2 className="font-[var(--font-cormorant)] text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Not merely to gather people, but to see lives transformed.
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
              At the heart of PAM is a burden to see men encounter Christ and
              come into His light. We are committed to preaching Christ,
              teaching His truth, demonstrating His love, and calling men into
              a life of holiness.
            </p>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-24 border-y border-white/10 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Our Vision
              </p>

              <p className="mt-6 max-w-5xl font-[var(--font-cormorant)] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Bringing men into the fullness of Christ&apos;s light through
                the Gospel of Love, Truth and Holiness.
              </p>
            </div>

            <ArrowDownRight
              size={48}
              strokeWidth={1}
              className="hidden text-[#b08d57] lg:block"
            />
          </div>
        </div>

        {/* Three pillars */}
        <div className="mt-16 grid md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="border-b border-white/10 px-0 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-sm text-[#b08d57]">
                {pillar.number}
              </span>

              <h3 className="mt-10 font-[var(--font-cormorant)] text-4xl">
                {pillar.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-24 max-w-4xl">
          <p className="font-[var(--font-cormorant)] text-3xl leading-tight text-white/80 sm:text-4xl">
            Not merely to communicate information, but to reveal Christ.
            Not merely to produce church members, but to raise people who know
            Christ, walk in His light, and express His life.
          </p>
        </div>
      </div>
    </section>
  );
}