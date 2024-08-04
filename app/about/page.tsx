import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import Briefcases from "@/app/about/components/Briefcase";
import Frame from "@/app/about/components/Frame";
import Links from "@/app/about/components/Links";

import hinesLogo from "public/work/hines-logo.jpeg";
import perishipLogo from "public/work/periship-logo.jpeg";
import camsLogo from "public/work/cams-logo.png";
import uhdLogo from "public/work/uhd.png";

import meLily from "public/gallery/me-lily.jpg";
import colorado from "public/gallery/colorado.jpg";

export const metadata: Metadata = {
  title: "About | Brian Ruiz",
  description:
    "Houston-based Software Engineer and a Content Creator, sharing insights on well-designed products and technology advancements.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={meLily}
            alt={"me and lily"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md"
            priority

          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={colorado}
            alt={"me and lily"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority

          />
        </div>
      </div>
      <div className="hidden md:block">
        <Frame />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Hi, I&apos;m Brian, born in Honduras and raised in Houston, Texas.
              I have been coding for {new Date().getFullYear() - 2019} years. As
              a software engineer, I specialize in full-stack web development
              and product design.
            </p>
            <p>
              In addition to coding, I create content on my{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/@brianruizy"
              >
                YouTube
              </Link>{" "}
              channel, covering all things technology, coding vlogs, and
              personal development.
            </p>
            <p>
              When I&apos;m not at my desk, I am probably lifting weights,
              playing soccer, riding my e-bike, or at a local coffee shop :]
            </p>
          </div>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I specialize in Python, data analytics, React, web development,
              UI/UX, and product design. But I am always learning new things.
              Here are some of the places I have worked.
            </p>
            <Briefcases items={briefcases} />
          </div>
        </Section>
        <Links />
      </div>
    </div>
  );
}

const briefcases = [
  {
    title: "Full Stack Engineer",
    company: "Hines",
    date: "2022 -",
    imageSrc: hinesLogo,
    link: "https://hines.com",
  },
  {
    title: "Software Engineer",
    company: "PeriShip",
    date: "2021 - 2022",
    imageSrc: perishipLogo,
    link: "https://peripharma.com/",
  },
  {
    title: "Python Developer",
    company: "CAMS",
    date: "2019 - 2020",
    imageSrc: camsLogo,
    link: "https://camstex.com",
  },
  {
    title: "Coding Camp Instructor",
    company: "University of Houston",
    date: "2019",
    imageSrc: uhdLogo,
    link: "https://www.uhd.edu/",
  },
];
