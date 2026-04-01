import { Mail, Code, Briefcase, Share2, MapPin, Book } from "lucide-react";

export default function AboutPage() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/jayantchandra",
      icon: Code,
      username: "github.com/jayantchandra",
    },
    {
      name: "Substack",
      href: "https://jayantchandra.substack.com/",
      icon: Book,
      username: "jayantchandra.substack.com",
    },
    // { name: "Twitter", href: "https://twitter.com", icon: Share2, username: "@jayantc" },
    // { name: "LinkedIn", href: "https://linkedin.com", icon: Briefcase, username: "Jayant Chandra" },
    {
      name: "Email",
      href: "mailto:hello@jayantchandra.com",
      icon: Mail,
      username: "hello@jayantchandra.com",
    },
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
              <span>New Delhi, India</span>
            </div>
          </header>

          <div className="space-y-6 text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
            <p>
              Full-stack developer building{" "}
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                production-grade systems
              </span>
              ,
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                {" "}
                internal tools
              </span>
              , and
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                {" "}
                data-driven web applications
              </span>
              .
            </p>

            <p className="text-base font-normal">
              Experience across{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                early-stage startups
              </span>{" "}
              and
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {" "}
                enterprise environments
              </span>
              , leading
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {" "}
                system design
              </span>
              ,
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {" "}
                feature scoping
              </span>
              , and
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {" "}
                end-to-end delivery
              </span>
              .
            </p>

            <p className="text-base font-normal">
              Built{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                microservice-based platforms
              </span>
              ,
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {" "}
                analytics dashboards
              </span>
              , and
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {" "}
                internal systems
              </span>{" "}
              used daily by teams, with focus on{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                performance
              </span>
              ,
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {" "}
                reliability
              </span>
              , and
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {" "}
                fast iteration
              </span>
              .
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
                      <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        {social.name}
                      </p>
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
          <p className="text-sm text-zinc-500 leading-relaxed">
            ~4.5 years building and maintaining production systems across
            healthcare platforms and enterprise analytics at Infosys.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Focus</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Full-stack development with React, Next.js, Node.js, and PostgreSQL,
            focused on scalable systems, microservices, and performance.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Impact</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Delivered internal tools, dashboards, and platforms used daily by
            teams, improving workflow efficiency, system visibility, and
            operational speed.
          </p>
        </div>
      </section>
    </div>
  );
}
