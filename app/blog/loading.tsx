export default function BlogLoading() {
  return (
    <main id="main-content" className="site-container animate-pulse pb-24 pt-24" aria-label="Cargando el blog">
      <div className="h-4 w-40 rounded-sm bg-muted" />
      <div className="mt-7 h-28 w-2/3 rounded-md bg-muted" />
      <div className="mt-24 space-y-8 md:ml-[16.66%]">
        {[0, 1, 2].map((item) => (
          <div key={item} className="border-t border-border py-8"><div className="h-10 w-3/4 rounded-md bg-muted" /><div className="mt-4 h-4 w-1/2 rounded-sm bg-muted" /></div>
        ))}
      </div>
    </main>
  );
}
