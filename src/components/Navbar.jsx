import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/50 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow">
            <Rocket size={18} />
          </span>
          <span className="text-gray-900 dark:text-white">Flames Studio</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Services</a>
          <a href="#work" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Work</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contact</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 font-medium shadow hover:opacity-90 transition">
            Start a Project
          </a>
        </div>
      </nav>
    </header>
  );
}
