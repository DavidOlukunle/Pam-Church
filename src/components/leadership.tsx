import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";

const leaders = [
  {
    name: "Apostle Ima Bennett",
    role: "Senior Pastor / President",
    image: "/images/ima-bennett.jpg",
    bio: "Serving the commission in pastoral leadership, teaching, spiritual development, and the advancement of PAM's Christ-centred mandate.",
  },
  {
    name: "Apostle Zoe",
    role: "Vice President",
    image: "/images/zoe-yaweh.jpg",
    bio: "Serving the ministry through spiritual leadership, teaching, and the advancement of the Gospel and the vision of PAM.",
  },
  {
    name: "Rev. Dunamis-Odudu Bennett",
    role: "Resident Pastor",
    image: "/images/dunamis.jpg",
    bio: "Committed to supporting the ministry's spiritual assignment through service, teaching, and the nurturing of lives in Christ.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-[#f7f4ee] px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b08d57]">
              Our Leadership
            </p>

            <div className="mt-6 h-px w-16 bg-[#b08d57]" />
          </div>

          <div>
            <h2 className="font-[var(--font-cormorant)] text-5xl leading-[1.05] text-[#171614] sm:text-6xl lg:text-7xl">
              Servants committed to the work of the Gospel.
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#24211d]/70 sm:text-lg">
              The leadership of PAM is committed to building a ministry where
              the Word of God is taught, Christ is exalted, people are nurtured,
              and lives are transformed.
            </p>
          </div>
        </div>

        {/* Leaders */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <Reveal
    key={leader.name}
    delay={index * 0.12}
  >
            <article key={leader.name} className="group">
              {/* Image / placeholder */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ede8de]">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <span className="font-[var(--font-cormorant)] text-7xl text-[#b08d57]/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#24211d]/40">
                        Photo coming soon
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#171614] text-white transition-transform duration-300 group-hover:-translate-y-1">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Details */}
              <div className="pt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b08d57]">
                  {leader.role}
                </p>

                <h3 className="mt-2 font-[var(--font-cormorant)] text-3xl text-[#171614]">
                  {leader.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#24211d]/60">
                  {leader.bio}
                </p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-24 border-t border-[#24211d]/10 pt-10">
          <p className="max-w-4xl font-[var(--font-cormorant)] text-3xl leading-tight text-[#171614] sm:text-4xl">
            A ministry where the Word of God is taught, Christ is exalted,
            people are nurtured, and lives are transformed.
          </p>
        </div>
      </div>
    </section>
  );
}