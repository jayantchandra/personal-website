import { Mail, Code, Share2, MapPin, Book } from "lucide-react";

export default function Home() {
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
    {
      name: "Email",
      href: "mailto:hello@jayantchandra.com",
      icon: Mail,
      username: "hello@jayantchandra.com",
    },
  ];

  return (
    <div className="space-y-32 max-w-5xl mx-auto px-4 sm:px-8">
      {/* HERO */}
      <section className="space-y-8 py-16">
        <div className="flex flex-wrap gap-3">
          <Badge text="Available for opportunities" />
          <Badge text="Building in public" />
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.1] tracking-tight">
          Architecting systems with{" "}
          <span className="text-zinc-400">precision</span> and{" "}
          <span className="text-zinc-400">scale</span>.
        </h1>

        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-medium">
          I&apos;m Jayant Chandra — a full-stack developer focused on building
          resilient distributed systems and developer-first tools.
        </p>
      </section>

      {/* ABOUT */}
      <section className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            About
          </h2>

          <p>
            I build{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              production-grade systems
            </span>
            , internal tools, and data-driven applications.
          </p>

          <p className="text-base">
            Experience across startups and enterprise environments, leading
            system design, feature scoping, and end-to-end delivery.
          </p>

          <p className="text-base">
            Focused on performance, reliability, and systems that scale without
            becoming complex.
          </p>
        </div>

        {/* Profile Card */}
        <div className="space-y-6">
          <div className="aspect-square rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-950 border flex items-center justify-center text-5xl font-bold text-zinc-300">
            JC
          </div>

          <div className="flex items-center gap-2 text-zinc-500">
            <MapPin className="w-4 h-4" />
            New Delhi, India
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-zinc-50 dark:bg-zinc-950 rounded-[3rem] p-12 text-center space-y-10">
        <h2 className="text-3xl font-bold">Approach</h2>

        <p className="italic text-xl text-zinc-600 dark:text-zinc-400 font-serif max-w-2xl mx-auto">
          “Build systems that are simple enough to maintain, but flexible enough
          to evolve.”
        </p>

        <div className="grid sm:grid-cols-2 gap-10 pt-6 text-left">
          <div>
            <h4 className="font-bold">Practicality</h4>
            <p className="text-sm text-zinc-500">
              Ship fast, iterate based on real usage.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Reliability</h4>
            <p className="text-sm text-zinc-500">
              Stable systems teams can depend on daily.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="grid md:grid-cols-3 gap-12">
        <InfoBlock
          title="Experience"
          text="~4.5 years building production systems across healthcare platforms and enterprise analytics."
        />
        <InfoBlock
          title="Focus"
          text="React, Next.js, Node.js, PostgreSQL — scalable systems and microservices."
        />
        <InfoBlock
          title="Impact"
          text="Built internal tools and dashboards improving workflow efficiency and visibility."
        />
      </section>

      {/* CONTACT / NETWORK */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Network</h2>

        <div className="grid gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="group flex items-center justify-between p-4 rounded-2xl border bg-zinc-50 dark:bg-zinc-950 hover:border-zinc-300 transition"
            >
              <div className="flex items-center gap-4">
                <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold">{social.name}</p>
                  <p className="text-xs text-zinc-500">{social.username}</p>
                </div>
              </div>
              <Share2 className="w-4 h-4 opacity-0 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

/* COMPONENTS */

function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border text-xs text-zinc-600">
      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
      {text}
    </div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{text}</p>
    </div>
  );
}
