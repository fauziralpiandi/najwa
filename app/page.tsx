import Image from 'next/image';
import moon from 'public/imgs/moon.jpg';
import cool from 'public/imgs/cool.jpg';

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
      <div className="grayscale grid grid-cols-2 grid-rows-1 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={moon}
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
            src={cool}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="animate-in rounded-lg object-cover object-top sm:object-center"
            style={{ '--index': 4 } as React.CSSProperties}
          />
        </div>
      </div>
      <div
        className="animate-in prose prose-neutral dark:prose-invert"
        style={{ '--index': 5 } as React.CSSProperties}
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
        style={{ '--index': 6 } as React.CSSProperties}
      >
        <p>
          I savor coffee at night while gazing at the beautiful moon over the
          lake, enjoying the solitude. In these moments, there's no time to
          think about anyone else—it's just me and the shadow of the moon.
        </p>
      </div>
    </section>
  );
}