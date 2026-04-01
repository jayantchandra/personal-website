import { Mail, Code, Briefcase, Share2, MapPin } from "lucide-react";

export default function AboutPage() {
  const socials = [
    { name: "GitHub", href: "https://github.com", icon: Code, username: "@jayantchandra" },
    { name: "Twitter", href: "https://twitter.com", icon: Share2, username: "@jayantc" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Briefcase, username: "Jayant Chandra" },
    { name: "Email", href: "mailto:hello@example.com", icon: Mail, username: "hello@jayant.me" },
  ];

  return (
    <div className="space-y-24 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              Jayant Chandra
            </h1>
            <div className="flex items-center gap-2 text-zinc-500 font-medium">
              <MapPin className="w-4 h-4" />
              <span>Bengaluru, India</span>
            </div>
          </header>

          <div className="space-y-6 text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
            <p>
              I build high-performance systems and developer tools that empower engineering teams.
            </p>
            <p className="text-base font-normal">
              My journey began with a curiosity about how things work under the hood, which led me to specialize in systems architecture and backend engineering. I believe in writing code that is not just functional, but maintainable and robust.
            </p>
            <p className="text-base font-normal">
              Beyond my professional work, I&apos;m an advocate for open-source software and enjoy contributing to projects that improve the developer experience.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="aspect-square rounded-[3rem] bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-200 dark:text-zinc-800 font-bold text-6xl">
              JC
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
              Network
            </h2>
            <div className="grid gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                    <div>
                      <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{social.name}</p>
                      <p className="text-xs text-zinc-500">{social.username}</p>
                    </div>
                  </div>
                  <Share2 className="w-4 h-4 text-zinc-300 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="border-t border-zinc-100 dark:border-zinc-900 pt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Experience</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">Over a decade of experience across fintech, logistics, and developer tooling startups.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Focus</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">Microservices, Cloud Native, Observability, and Performance Optimization.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Speaking</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">Regularly speaking at conferences about Rust, Go, and Scalable Architecture.</p>
        </div>
      </section>
    </div>
  );
}
