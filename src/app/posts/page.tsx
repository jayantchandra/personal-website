export default function PostsPage() {
  const posts = [
    {
      title: "Building Resilient Distributed Systems",
      date: "Nov 24, 2023",
      category: "Systems",
      description: "Exploring the core principles of designing systems that handle failure gracefully and maintain high availability in production environments.",
      href: "/posts/building-resilient-systems",
    },
    {
      title: "Optimizing React Performance for Data-Heavy Applications",
      date: "Oct 12, 2023",
      category: "Frontend",
      description: "Techniques and patterns for maintaining 60fps in React applications when dealing with large datasets and complex state management.",
      href: "/posts/optimizing-react-performance",
    },
    {
      title: "The Case for Internal Developer Platforms",
      date: "Aug 05, 2023",
      category: "DevOps",
      description: "How specialized internal platforms can reduce cognitive load for engineering teams and speed up the delivery lifecycle.",
      href: "/posts/internal-developer-platforms",
    },
    {
      title: "Migrating from Monolith to Microservices",
      date: "Jun 15, 2023",
      category: "Architecture",
      description: "A step-by-step approach to decomposing large applications without disrupting ongoing feature development.",
      href: "/posts/monolith-to-microservices",
    },
  ];

  return (
    <div className="space-y-16">
      <header className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Writing
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I write about software architecture, distributed systems, and the messy reality of building products at scale.
        </p>
      </header>

      <div className="space-y-24">
        {posts.map((post) => (
          <article key={post.href} className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12 items-baseline">
            <div className="md:col-span-1">
              <time className="text-sm font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                {post.date}
              </time>
              <div className="mt-1 text-xs font-semibold text-zinc-400 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 px-2 py-0.5 rounded-full inline-block">
                {post.category}
              </div>
            </div>
            <div className="md:col-span-3 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-500 transition-colors">
                <a href={post.href}>{post.title}</a>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                {post.description}
              </p>
              <a href={post.href} className="inline-flex items-center text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:gap-2 transition-all">
                Read full article <span className="ml-1">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
