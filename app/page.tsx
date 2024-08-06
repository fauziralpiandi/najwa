import Image from 'next/image';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import smashing from 'public/images/home/smashing.jpg';
import ship from 'public/images/home/ship.jpg';
import filming from 'public/images/home/filming.jpg';

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
      <hr className="my-6 border-neutral-200 dark:border-neutral-700" />
      <div className="grayscale grid grid-cols-2 grid-rows-2 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        
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
        <hr className="my-6 border-neutral-200 dark:border-neutral-700" />
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
      <hr className="my-6 border-neutral-200 dark:border-neutral-700" />
      <ul
        className="animate-in font-sm flex flex-row space-x-4 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300"
        style={{ '--index': 11 } as React.CSSProperties}
        >
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/fauziralpiandi"
          >
            <FaInstagram />
            <p className="ml-1.5">get connect</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/fauziralpiandi"
          >
            <FaGithub />
            <p className="ml-1.5">be a partner</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
