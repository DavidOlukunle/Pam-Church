import { ArrowUpRight, Clock3 } from "lucide-react";
import Reveal from "@/components/reveal";

const services = [
  {
    day: "Sunday",
    title: "Sunday School",
    time: "8:00 AM — 9:00 AM",
    description:
      "A time of teaching, learning, and growing in the knowledge of God's Word.",
  },
  {
    day: "Sunday",
    title: "Supernatural Service",
    time: "9:00 AM — 11:00 AM",
    description:
      "A time of worship, the Word, fellowship, and encountering the presence of God.",
  },
  {
    day: "Tuesday",
    title: "Bible Study",
    time: "5:00 PM — 6:00 PM",
    description:
      "A focused time in God's Word, growing together in understanding and truth.",
  },
  {
    day: "Thursday",
    title: "Prayer Meeting",
    time: "5:00 PM — 6:00 PM",
    description:
      "A dedicated time of prayer, seeking God and standing together in faith.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#ede8de] px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b08d57]">
              Gather With Us
            </p>

            <div className="mt-6 h-px w-16 bg-[#b08d57]" />
          </div>

          <div>
            <h2 className="font-[var(--font-cormorant)] text-5xl leading-[1.05] text-[#171614] sm:text-6xl lg:text-7xl">
              There is a place for you at PAM.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#24211d]/70 sm:text-lg">
              Join us throughout the week as we gather around the Word, in
              worship, fellowship, and prayer.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-20">
          {services.map((service, index) => (
             <Reveal
    key={`${service.day}-${service.title}`}
    delay={index * 0.08}
  >
            <article
              key={`${service.day}-${service.title}`}
              className="group grid gap-6 border-t border-[#24211d]/15 py-8 md:grid-cols-[120px_1fr_auto] md:items-center md:gap-10"
            >
              {/* Number / day */}
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#b08d57]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-2 font-[var(--font-cormorant)] text-2xl text-[#171614]">
                  {service.day}
                </p>
              </div>

              {/* Service */}
              <div>
                <h3 className="font-[var(--font-cormorant)] text-3xl text-[#171614] sm:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#24211d]/60">
                  {service.description}
                </p>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3 text-sm text-[#24211d]/70">
                <Clock3
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#b08d57]"
                />

                <span>{service.time}</span>

                <ArrowUpRight
                  size={18}
                  className="ml-3 text-[#24211d]/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b08d57]"
                />
              </div>
            </article>
            </Reveal>
          ))}

          <div className="border-t border-[#24211d]/15" />
        </div>

        {/* Bottom note */}
        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#24211d]/50">
            Come as you are. Come ready to encounter Christ.
          </p>

          <a
            href="#prayer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#171614] transition-colors hover:text-[#b08d57]"
          >
            Need prayer or counselling?
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}