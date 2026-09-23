export default function OurStory() {
  return (
    <section
      id="our-story"
      className="bg-[#171614] px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Heading */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b08d57]">
              Our Story
            </p>

            <h2 className="mt-6 font-[var(--font-cormorant)] text-5xl leading-tight sm:text-6xl">
              A distinct identity. The same spiritual assignment.
            </h2>
          </div>

          {/* Story */}
          <div>
            <div className="border-l border-white/15 pl-6 sm:pl-10">
              <div className="relative pb-16">
                <span className="absolute -left-[25px] top-1 h-3 w-3 rounded-full bg-[#b08d57] ring-8 ring-[#171614]" />

                <p className="text-xs uppercase tracking-[0.25em] text-[#b08d57]">
                  The Beginning
                </p>

                <h3 className="mt-3 font-[var(--font-cormorant)] text-3xl">
                  Holy Ghost Anointed Church of God
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-white/60">
                  PNEUMA ANOINTED MINISTRY began as Holy Ghost Anointed Church
                  of God.
                </p>
              </div>

              <div className="relative pb-16">
                <span className="absolute -left-[25px] top-1 h-3 w-3 rounded-full bg-[#b08d57] ring-8 ring-[#171614]" />

                <p className="text-xs uppercase tracking-[0.25em] text-[#b08d57]">
                  A New Identity
                </p>

                <h3 className="mt-3 font-[var(--font-cormorant)] text-3xl">
                  PNEUMA ANOINTED MINISTRY
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-white/60">
                  As the ministry progressed toward formal incorporation, it
                  was discovered that there were existing organizations
                  bearing similar names. In order to establish a distinct
                  corporate identity and avoid confusion with other
                  organizations, the name was changed to PNEUMA ANOINTED
                  MINISTRY.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[25px] top-1 h-3 w-3 rounded-full bg-[#b08d57] ring-8 ring-[#171614]" />

                <p className="text-xs uppercase tracking-[0.25em] text-[#b08d57]">
                  Today
                </p>

                <h3 className="mt-3 font-[var(--font-cormorant)] text-3xl">
                  The Commission Continues
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-white/60">
                  The change of name did not represent a change in the
                  spiritual assignment of the ministry. Rather, it provided a
                  distinct identity through which the same burden and
                  commitment could continue to be expressed.
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-white/60">
                  Today, PNEUMA ANOINTED MINISTRY remains committed to the
                  Gospel of Christ and to the transformation of lives through
                  the Word of God.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}