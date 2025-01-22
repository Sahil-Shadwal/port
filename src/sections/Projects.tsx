import dev from "@/assets/images/dev.png";
import wise from "@/assets/images/wise.png";
import fast from "@/assets/images/fast.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { ArrowUpRightIcon, CheckCircleIcon } from "lucide-react";

const portfolioProjects = [
  {
    company: "Web Dev ",
    year: "2024",
    title: "Devflow",
    results: [
      { title: "Comprehensive question and answer platform" },
      { title: "Authentication using NextAuth" },
      {
        title:
          "Technologies used: NextJS, Typescript, Tailwind, shadcn, MongoDB.",
      },
    ],
    link: "https://devflow.shadwal.site/",
    image: dev,
  },
  {
    company: "AI",
    year: "2025",
    title: "Repo-Wise",
    results: [
      { title: "GitHub collaboration platform" },
      { title: "AI-driven summaries for comments, commits with LangChain" },
      { title: "Utilized T3 stack, Tailwind CSS, and Shadcn UI" },
    ],
    link: "https://github.com/Sahil-Shadwal/Repo-Wise",
    image: wise,
  },
  {
    company: "Web Socket",
    year: "2025",
    title: "Fast-Type",
    results: [
      { title: "A Fast and Minimal Typing App." },
      { title: "Practice typing in various modes" },
      { title: "Sweet Mechanical Keyboard Sounds" },
    ],
    link: "https://fast-type-one.vercel.app/",
    image: fast,
  },
];

export const ProjectsSection = () => {
  return (
    <>
      {/* <div className="flex justify-center mb-8">
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>
      </div> */}
      <section className="pb-16 lg:py-24">
        <div>
          <div className="container">
            <SectionHeader
              eyebrow="Real-world Results"
              title="Featured Projects"
              description="See how I transformed idea's into engaging digital experiences."
            />
            <div className="flex flex-col mt-10 md:mt-20 gap-20">
              {portfolioProjects.map((project, projectIndex) => (
                <Card
                  key={project.title}
                  className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
                  style={{
                    top: `calc(64px + ${projectIndex * 40}px)`,
                  }}
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                        {project.title}
                      </h3>
                      <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result) => (
                          <li
                            key={result.title}
                            className="flex gap-2 text-sm md:text-base text-white/50"
                          >
                            <CheckCircleIcon className="size-5 md:size-6" />
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={project.link}>
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                          <span>Visit Live Site</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    </div>
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
