import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow text-brick">404</p>
      <h1 className="mt-4 font-display text-4xl">This page hasn't been built yet</h1>
      <p className="mt-4 text-ink/70">
        The page you're looking for doesn't exist. Head back to the homepage to keep exploring.
      </p>
      <Link to="/" className="mt-7 rounded-full bg-brick px-6 py-3 font-semibold text-paper">
        Back to Home
      </Link>
    </section>
  );
}
