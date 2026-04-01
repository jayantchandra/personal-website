import { Terminal, Database, Shield, Cpu, ExternalLink } from "lucide-react";

export default function ToolsPage() {
  const tools = [
    {
      name: "NexusDeploy",
      description: "A custom CI/CD orchestration tool for Kubernetes deployments with automated rollbacks.",
      icon: Terminal,
      tags: ["Go", "Kubernetes", "gRPC"],
    },
    {
      name: "QueryGenie",
      description: "An open-source SQL query optimizer that analyzes execution plans and suggests improvements.",
      icon: Database,
      tags: ["PostgreSQL", "Rust", "SQL"],
    },
    {
      name: "SentinelGuard",
      description: "A security monitoring tool that detects anomalous API patterns and prevents unauthorized access.",
      icon: Shield,
      tags: ["Python", "ML", "Security"],
    },
    {
      name: "MetricFlow",
      description: "A real-time metrics processing engine designed for high-throughput observability pipelines.",
      icon: Cpu,
      tags: ["C++", "Kafka", "Prometheus"],
    },
  ];

  return (
    <div className="space-y-16">
      <header className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Stack
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          A collection of tools and libraries I&apos;ve built to solve engineering bottlenecks and enhance the developer experience.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group relative flex flex-col p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm group-hover:shadow-md transition-shadow">
                <tool.icon className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <ExternalLink className="w-5 h-5 text-zinc-300 dark:text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {tool.name}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                {tool.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
