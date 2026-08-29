export default function BlogLoading() {
  return (
    <main id="main-content" className="site-container animate-pulse pb-24 pt-24" aria-label="Cargando el blog">
      <div className="h-4 w-40 rounded-sm bg-muted" />
      <div className="mt-7 h-28 w-2/3 rounded-md bg-muted" />
      <div className="mt-24 space-y-8 md:ml-[16.66%]">
        {[0, 1, 2].map((item) => (
          <div key={item} className="grid gap-6 border-t border-border py-8 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-8">
            <div className="aspect-video rounded-lg bg-muted lg:aspect-[4/3]" />
            <div>
              <div className="h-10 w-3/4 rounded-md bg-muted" />
              <div className="mt-4 h-4 w-1/2 rounded-sm bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
