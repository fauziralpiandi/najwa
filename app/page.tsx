export default function Page() {
  return (
    <section>
      <div className="mb-6" style={{ '--index': 1 } as React.CSSProperties}>
        <h1 className="animate-in flex flex-row gap-2 items-center text-2xl font-medium tracking-tighter">
          hey, Zira here!
        </h1>
      </div>
      <div className="mb-4" style={{ '--index': 2 } as React.CSSProperties}>
        <p className="animate-in prose-neutral text-neutral-900 dark:prose-invert dark:text-neutral-300">
          An enthusiastic entry-level{' '}
          <span className="text-neutral-800 bg-neutral-300 transition-all duration-300 dark:text-neutral-100 dark:bg-neutral-700 px-0.5">
            frontend engineer
          </span>{' '}
          with a deep passion for crafting engaging user experiences.
        </p>
      </div>
      <div className="mb-4" style={{ '--index': 3 } as React.CSSProperties}>
        <p className="animate-in prose-neutral text-neutral-900 dark:prose-invert dark:text-neutral-300">
          Over the past {new Date().getFullYear() - 2023} year on the client
          side of development,{' '}
          <span className="text-neutral-800 bg-neutral-300 transition-all duration-300 dark:text-neutral-100 dark:bg-neutral-700 px-0.5">
            I've experienced countless fun and amazing moments.
          </span>{' '}
          I have a thirst for knowledge, which drives my passion for complex
          problems and questions that spark curiosity.
        </p>
      </div>
      <div className="mb-4" style={{ '--index': 4 } as React.CSSProperties}>
        <p className="animate-in prose-neutral text-neutral-900 dark:prose-invert dark:text-neutral-300">
          Writing is my escape—a way to cool my head and seek ideas through a
          pencil, providing a much-needed break after endless{' '}
          <span className="text-neutral-800 bg-neutral-300 transition-all duration-300 dark:text-neutral-100 dark:bg-neutral-700 px-0.5">
            debugging sessions that drain my logic.
          </span>
        </p>
      </div>
      <div className="mb-4" style={{ '--index': 5 } as React.CSSProperties}>
        <p className="animate-in prose-neutral text-neutral-900 dark:prose-invert dark:text-neutral-300">
          I savor coffee at night while gazing at the beautiful moon over the
          lake, enjoying the solitude. In these moments, there's no time to
          think about anyone else—it's{' '}
          <span className="text-neutral-800 bg-neutral-300 transition-all duration-300 dark:text-neutral-100 dark:bg-neutral-700 px-0.5">
            just me and the shadow of the moon.
          </span>
        </p>
      </div>
    </section>
  );
}
