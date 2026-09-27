
import Image from "next/image";
import Reveal from "@/components/reveal";

const foundations = [
  {
    number: "01",
    title: "Truth",
    description:
      "We are committed to the uncompromising truth of God's Word and the revelation of Christ.",
  },
  {
    number: "02",
    title: "Love",
    description:
      "We demonstrate the love of Christ through our message, relationships and service to others.",
  },
  {
    number: "03",
    title: "Holiness",
    description:
      "We encourage a life set apart for God, reflecting the character and life of Christ.",
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="overflow-hidden bg-[#f7f4ee] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#b08d57]" />
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b08d57]">
                  Who We Are
                </p>
              </div>

              <h2 className="mt-7 max-w-xl font-[var(--font-cormorant)] text-5xl leading-[1.05] tracking-tight text-[#24211d] sm:text-6xl lg:text-7xl">
                A ministry built on the revelation of Christ.
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-8 text-[#24211d]/70 sm:text-base">
                PNEUMA ANOINTED MINISTRY (PAM) INC. is a Christ-centred
                ministry committed to preaching the Gospel of Christ,
                bringing men into the light of Christ, and seeing lives
                transformed through the power and truth of the Gospel.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#24211d]/70 sm:text-base">
                We believe that the Gospel is not merely a message to be
                heard, but the revelation of Christ through which men are
                brought from darkness into light and transformed into the
                expression of His life.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#24211d]/70 sm:text-base">
                Our desire is to see people know Christ, understand His
                redemptive work, grow in the knowledge of God's Word, and
                live out the reality of their new life in Him.
              </p>
            </div>
          </Reveal>

          {/* Congregation image */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ede8de] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/church-community.jpg"
                  alt="Members gathered for fellowship at Pneuma Anointed Ministry"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="absolute -bottom-5 right-0 max-w-[85%] bg-[#171614] px-6 py-5 text-white sm:bottom-8 sm:-right-5 sm:max-w-xs sm:px-8 sm:py-7">
                <p className="font-[var(--font-cormorant)] text-2xl leading-tight sm:text-3xl">
                  The Place of Word, Miracle and Transformation.
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#b08d57]">
                  PNEUMA ANOINTED MINISTRY
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Foundational values */}
        <div className="mt-28 border-t border-[#24211d]/10 pt-12 sm:mt-36">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b08d57]">
                  Our Foundation
                </p>
                <h3 className="mt-4 font-[var(--font-cormorant)] text-4xl text-[#24211d] sm:text-5xl">
                  What We Stand For
                </h3>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#24211d]/60">
                Three foundational expressions shape our message,
                our service and our commitment to Christ.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {foundations.map((foundation, index) => (
              <Reveal key={foundation.number} delay={index * 0.1}>
                <article className="h-full border-t border-[#b08d57]/50 pt-6">
                  <span className="text-xs tracking-[0.2em] text-[#b08d57]">
                    {foundation.number}
                  </span>

                  <h4 className="mt-5 font-[var(--font-cormorant)] text-4xl text-[#24211d]">
                    {foundation.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-[#24211d]/65">
                    {foundation.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}