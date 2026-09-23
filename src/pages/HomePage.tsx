
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

type Props = {};

const HomePage = ({}: Props) => {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--card-bg),transparent_58%)] opacity-80" />
      <section className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-(--primary-color)">
          Modern React Component Suite
        </p>
        <h1 className="max-w-xl text-4xl font-bold tracking-tight text-(--text-color) sm:text-6xl">
          Craft stunning web apps with speed & precision.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-(--muted-text-color) sm:text-lg">
          A versatile library of clean, production-ready React components engineered
          to streamline your workflow and deliver polished digital experiences.
        </p>
        <button
          type="button"
          onClick={() => navigate("/components/button")}
          className="mt-9 inline-flex items-center gap-2 rounded-lg bg-(--primary-color) px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary-color) focus-visible:ring-offset-2"
        >
          Explore Components
          <ArrowRight size={17} />
        </button>
      </section>
    </main>
  );
};

export default HomePage;
