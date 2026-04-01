import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="space-y-8 py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-7xl max-w-3xl leading-[1.1]">
          Architecting systems with <span className="text-zinc-400">precision</span> and <span className="text-zinc-400">scale</span>.
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-medium">
          I&apos;m Jayant Chandra, a full-stack developer specializing in building resilient distributed systems and elegant developer tools.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <a href="/about" className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-semibold hover:opacity-90 transition-opacity">
            About me
          </a>
          <a href="/posts" className="px-6 py-3 rounded-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex items-center gap-2">
            Read blog <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Selected Posts */}
      <section className="space-y-12">
        <div className="flex items-end justify-between border-b border-zinc-100 dark:border-zinc-900 pb-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Selected Posts
            </h2>
            <p className="text-zinc-500 dark:text-zinc-500">Thinking out loud about software and systems.</p>
          </div>
          <a href="/posts" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 decoration-2">
            View all posts
          </a>
        </div>
        <div className="grid gap-12 sm:grid-cols-2">
          <article className="group space-y-4">
            <div className="aspect-video rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-700 font-bold text-4xl">
                01
              </div>
            </div>
            <div className="space-y-2">
              <time className="text-xs font-bold uppercase tracking-widest text-zinc-400" dateTime="2023-11-24">
                November 24, 2023
              </time>
              <h3 className="text-xl font-bold leading-snug group-hover:text-zinc-500 transition-colors">
                <a href="/posts/building-resilient-systems">Building Resilient Distributed Systems</a>
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                Exploring the core principles of designing systems that handle failure gracefully and maintain high availability.
              </p>
            </div>
          </article>

          <article className="group space-y-4">
            <div className="aspect-video rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-700 font-bold text-4xl">
                02
              </div>
            </div>
            <div className="space-y-2">
              <time className="text-xs font-bold uppercase tracking-widest text-zinc-400" dateTime="2023-10-12">
                October 12, 2023
              </time>
              <h3 className="text-xl font-bold leading-snug group-hover:text-zinc-500 transition-colors">
                <a href="/posts/optimizing-react-performance">Optimizing React Performance for Data-Heavy Applications</a>
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                Techniques and patterns for maintaining 60fps in React applications when dealing with large datasets.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-zinc-50 dark:bg-zinc-950 -mx-4 px-4 py-24 sm:-mx-12 sm:px-12 rounded-[3rem]">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">My Philosophy</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 italic font-serif">
            &ldquo;Complexity is the enemy of reliability. I strive to build systems that are as simple as possible, but no simpler.&rdquo;
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="space-y-2">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-100">Quality</h4>
              <p className="text-sm text-zinc-500">Rigorous testing and peer review for every line of code.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-100">Scale</h4>
              <p className="text-sm text-zinc-500">Thinking about a million users from day one.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
