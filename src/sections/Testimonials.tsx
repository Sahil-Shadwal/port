import json from "@/assets/images/json.png";
import workbench from "@/assets/images/workbench.png";
import async from "@/assets/images/async.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "JSON Schema",
    position:
      "A declarative language that allows you to annotate and validate JSON documents.",
    text: "Sahil demonstrated exceptional adaptability by diving into schema validation and documentation, quickly mastering new concepts to make meaningful contributions. His ability to grasp complex specifications and translate them into clear documentation showcases his technical versatility.",
    avatar: json,
  },
  {
    name: "Workbench",
    position: "GNOME",
    text: "Sahil dove into unfamiliar territory with Rust and GTK, quickly adapting to contribute meaningful improvements to GNOME's development tools. His willingness to learn and tackle complex UI challenges showcases his versatility as a developer.",
    avatar: workbench,
  },
  {
    name: "Async API",
    position:
      "Improve the current state of Event-Driven Architectures (EDAs) and the tooling system around them.",
    text: "Sahil's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: async,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Open Source"
          title="What My Contribution Say About Me"
          description="Don't just take my word for it. See what my contribution have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:75s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-white-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
