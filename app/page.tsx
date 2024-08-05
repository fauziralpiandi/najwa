import Image from 'next/image';
import smashing from 'public/images/home/smashing.jpg';
import summit from 'public/images/home/summit.jpg';
import reactathon from 'public/images/home/reactathon.jpg';
import ship from 'public/images/home/ship.jpg';
import filming from 'public/images/home/filming.jpg';
import meetups from 'public/images/home/meetups.jpg';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="animate-in mb-8 text-2xl font-medium tracking-tighter">
        hey, Zira here!
      </h1>
      <p
        className="animate-in prose prose-neutral dark:prose-invert"
        style={{ '--index': 2 } as React.CSSProperties}
      >
        An enthusiastic entry-level frontend engineer with a deep passion for
        crafting engaging user experiences.
      </p>
      <div className="grayscale grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="animate-in rounded-lg object-cover"
            style={{ '--index': 3 } as React.CSSProperties}
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="animate-in rounded-lg object-cover object-top sm:object-center"
            style={{ '--index': 4 } as React.CSSProperties}
          />
        </div>
        <div className="relative">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="animate-in rounded-lg object-cover"
            style={{ '--index': 5 } as React.CSSProperties}
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="animate-in rounded-lg object-cover sm:object-center"
            style={{ '--index': 6 } as React.CSSProperties}
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={meetups}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="animate-in rounded-lg object-cover"
            style={{ '--index': 7 } as React.CSSProperties}
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="animate-in rounded-lg object-cover"
            style={{ '--index': 8 } as React.CSSProperties}
          />
        </div>
      </div>
      <div
        className="animate-in prose prose-neutral dark:prose-invert"
        style={{ '--index': 9 } as React.CSSProperties}
      >
        <p>
          Over the past year on the client side of website development, I've
          experienced countless fun and amazing moments. I have a thirst for
          knowledge, which drives my passion for complex problems and questions
          that spark curiosity. Writing is my escape—a way to cool my head and
          seek ideas through a pencil, providing a much-needed break after
          endless debugging sessions that drain my logic.
        </p>
      </div>
      <div
        className="animate-in prose prose-neutral dark:prose-invert"
        style={{ '--index': 10 } as React.CSSProperties}
      >
        <p>
          I savor coffee at night while gazing at the beautiful moon over the
          lake, enjoying the solitude. In these moments, there's no time to
          think about anyone else—it's just me and the shadow of the moon.
        </p>
      </div>
      <ul className="font-sm mt-16 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/fauziralpiandi"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
