import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  return (
    <nav className="border-b border-zinc-100 dark:border-zinc-900 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl tracking-tight hover:opacity-70 transition-opacity"
        >
          Jayant Chandra<span className="text-zinc-400"></span>
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
              About
            </Link>
          </div>
          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
