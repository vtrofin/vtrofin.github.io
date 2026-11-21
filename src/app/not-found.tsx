export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-sans text-4xl font-bold">NOT FOUND</h1>
      <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
      <p className="mt-6">
        <a
          href="/"
          className="inline-block rounded-sm bg-[#f2f2f2] px-3 py-1.5 font-sans text-sm font-semibold underline underline-offset-4 dark:bg-zinc-800"
        >
          Back to the homepage
        </a>
      </p>
    </div>
  );
}
