import Image from 'next/image';
import moon from 'public/imgs/moon.jpg';
import cool from 'public/imgs/cool.jpg';

export default function Page() {
  return (
    <section>
      <h1 className="animate-in mb-4 text-2xl font-medium tracking-tighter">
        hey, Zira here!
      </h1>
      <p
        className="animate-in prose-neutral dark:prose-invert relative"
        style={{ '--index': 2 } as React.CSSProperties}
      >
        An enthusiastic entry-level{' '}
        <span className="bg-gray-600 px-0.5">frontend engineer</span> with a
        deep passion for crafting engaging user experiences.
      </p>

      <div className="grayscale grid grid-cols-2 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="love you"
            src={moon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="animate-in rounded-lg object-cover"
            style={{ '--index': 3 } as React.CSSProperties}
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="in everytime"
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
        <p>
          Over the past {new Date().getFullYear() - 2023} year on the client
          side of website development,{' '}
          <span className="bg-gray-600 px-0.5">
            I've experienced countless fun and amazing moments.
          </span>{' '}
          I have a thirst for knowledge, which drives my passion for complex
          problems and questions that spark curiosity.
        </p>
      </div>

      <div
        className="animate-in prose prose-neutral dark:prose-invert"
        style={{ '--index': 6 } as React.CSSProperties}
      >
        <p>
          Writing is my escape—a way to cool my head and seek ideas through a
          pencil, providing a much-needed break after endless{' '}
          <span className="bg-gray-600 px-0.5">
            debugging sessions that drain my logic.
          </span>
        </p>
      </div>

      <div
        className="animate-in prose prose-neutral dark:prose-invert"
        style={{ '--index': 7 } as React.CSSProperties}
      >
        <p>
          I savor coffee at night while gazing at the beautiful moon over the
          lake, enjoying the solitude. In these moments, there's no time to
          think about anyone else—it's{' '}
          <span className="bg-gray-600 px-0.5">
            just me and the shadow of the moon.
          </span>
        </p>
      </div>
    </section>
  );
}
