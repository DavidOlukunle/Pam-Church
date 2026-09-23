import { ArrowRight } from "lucide-react";

const assignments = [
  {
    number: "01",
    title: "Preach Christ",
    description:
      "To proclaim the message of Christ and His redemptive work, bringing people into the knowledge of the Gospel.",
  },
  {
    number: "02",
    title: "Teach Truth",
    description:
      "To teach the truth of God's Word and help people understand who they are and what they have received in Christ.",
  },
  {
    number: "03",
    title: "Transform Lives",
    description:
      "To nurture spiritual growth and raise lives that reflect Christ through the transforming power of the Gospel.",
  },
];

export default function SpiritualAssignment() {
  return (
    <section
      id="spiritual-assignment"
      className="bg-[#f7f4ee] px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b08d57]">
              Our Spiritual Assignment
            </p>

            <div className="mt-6 h-px w-16 bg-[#b08d57]" />
          </div>

          <div>
            <h2 className="font-[var(--font-cormorant)] text-5xl leading-[1.05] text-[#171614] sm:text-6xl lg:text-7xl">
              Bringing men into the light of Christ.
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#24211d]/70 sm:text-lg">
              Our assignment is simple and Christ-centred: to preach the
              message of Christ and transform lives through the Gospel until
              men come to the light, which is Christ.
            </p>

            <div className="mt-16 border-t border-[#24211d]/10">
              {assignments.map((assignment) => (
                <article
                  key={assignment.number}
                  className="group grid gap-6 border-b border-[#24211d]/10 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-start"
                >
                  <span className="text-sm text-[#b08d57]">
                    {assignment.number}
                  </span>

                  <div>
                    <h3 className="font-[var(--font-cormorant)] text-3xl text-[#171614] sm:text-4xl">
                      {assignment.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#24211d]/60">
                      {assignment.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-[#24211d]/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#b08d57]"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 bg-[#171614] px-6 py-12 sm:px-12 sm:py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
            Ephesians 5:8
          </p>

          <blockquote className="mt-6 max-w-4xl font-[var(--font-cormorant)] text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            “For ye were sometimes darkness, but now are ye light in the Lord:
            walk as children of light.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}