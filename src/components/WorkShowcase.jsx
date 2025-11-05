export default function WorkShowcase() {
  const projects = [
    {
      title: "Fintech Dashboard",
      tag: "Web App",
      desc: "Data-dense trading tools redesigned for clarity and speed.",
      image:
        "https://images.unsplash.com/photo-1551281044-8b89ad3ac167?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Health Coach Mobile",
      tag: "Mobile UI",
      desc: "Habits, streaks, and progress visualizations that motivate.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "SaaS Marketing Site",
      tag: "Website",
      desc: "Playful brand story with subtle motion and 3D hero.",
      image:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="work" className="relative py-20 sm:py-24 bg-white dark:bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Selected work</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            A snapshot of projects where thoughtful UX meets playful, modern visuals.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-black px-2.5 py-1 text-xs font-medium">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-gray-700 dark:text-gray-300">{p.desc}</p>
                <div className="mt-4">
                  <a href="#contact" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                    Case study →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
