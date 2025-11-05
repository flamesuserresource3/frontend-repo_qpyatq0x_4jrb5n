import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import Services from "./components/Services";
import WorkShowcase from "./components/WorkShowcase";

function App() {
  return (
    <div className="font-inter bg-white text-gray-900 dark:bg-black dark:text-white">
      <Navbar />
      <main>
        <Hero3D />
        <Services />
        <WorkShowcase />
        <section id="contact" className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let's build something remarkable</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Share your goals and constraints. I'll propose an approach, timeline, and transparent pricing within 24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="mailto:hello@flames.studio" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black px-6 py-3 font-medium shadow hover:opacity-90 transition">
                Email hello@flames.studio
              </a>
              <a href="#top" className="inline-flex items-center justify-center rounded-lg bg-white/70 dark:bg-white/10 backdrop-blur text-gray-900 dark:text-white px-6 py-3 font-medium border border-gray-200/60 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/20 transition">
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 border-t border-gray-200/70 dark:border-white/10 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Flames Studio — UI/UX Design</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#work" className="hover:underline">Work</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
