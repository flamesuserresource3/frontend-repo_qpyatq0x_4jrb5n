import { Layout, Palette, PenTool } from "lucide-react";

const services = [
  {
    title: "Product UX",
    Icon: Layout,
    desc: "Flows, wireframes, and prototypes that make complex ideas feel simple and intuitive.",
  },
  {
    title: "Visual Design",
    Icon: Palette,
    desc: "Design systems, typography, and brand-forward UI with accessibility in mind.",
  },
  {
    title: "Interaction + Motion",
    Icon: PenTool,
    desc: "Delightful micro-interactions and animations that guide and reward users.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-400/10 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">What I do</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            End-to-end product design—from discovery to polished visuals—delivered in fast, collaborative cycles.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, Icon, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
