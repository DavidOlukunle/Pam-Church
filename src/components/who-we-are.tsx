import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";
import Image from "next/image";

const foundations = [
  {
    number: "01",
    title: "Truth",
    description:
      "We are committed to the truth of God's Word and to revealing Christ through the Gospel.",
  },
  {
    number: "02",
    title: "Love",
    description:
      "We believe the Gospel calls us to demonstrate the love of Christ in the way we live and relate with others.",
  },
  {
    number: "03",
    title: "Holiness",
    description:
      "We desire to see lives transformed and expressed through the reality of our new life in Christ.",
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="bg-[#f7f4ee] px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
        {/* Introduction */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b08d57]">
              Who We Are
            </p>

            <div className="mt-6 h-px w-16 bg-[#b08d57]" />
          </div>


          <div>
            <h2 className="font-[var(--font-cormorant)] text-5xl leading-[1.05] text-[#171614] sm:text-6xl lg:text-7xl">
              A Christ-centred ministry committed to transformation.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#24211d]/70 sm:text-lg">
              PNEUMA ANOINTED MINISTRY (PAM) INC. is a Christ-centred ministry
              committed to preaching the Gospel of Christ, bringing men into
              the light of Christ, and seeing lives transformed through the
              power and truth of the Gospel.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#24211d]/70">
              We believe that the Gospel is not merely a message to be heard,
              but the revelation of Christ through which men are brought from
              darkness into light and transformed into the expression of His
              life.
            </p>
          </div>
        </div>
      </Reveal>

      

        {/* Foundations */}
        <div className="mt-24 border-t border-[#24211d]/10">
          <div className="grid md:grid-cols-3">
            {foundations.map((foundation, index) => (
                  <Reveal
    key={foundation.number}
    delay={index * 0.1}
  >
              <article
                key={foundation.number}
                className="group border-b border-[#24211d]/10 p-8 md:border-b-0 md:border-r md:p-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-[#b08d57]">
                    {foundation.number}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-[#24211d]/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b08d57]"
                  />
                </div>

                <h3 className="mt-12 font-[var(--font-cormorant)] text-4xl capitalize text-[#171614]">
                  {foundation.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#24211d]/60">
                  {foundation.description}
                </p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-24 border-l-2 border-[#b08d57] pl-6 sm:pl-10">
          <p className="max-w-4xl font-[var(--font-cormorant)] text-3xl leading-tight text-[#171614] sm:text-4xl">
            Our desire is to see people know Christ, understand His redemptive
            work, grow in the knowledge of God&apos;s Word, and live out the
            reality of their new life in Him.
          </p>
        </div>
      </div>
    </section>
  );
}