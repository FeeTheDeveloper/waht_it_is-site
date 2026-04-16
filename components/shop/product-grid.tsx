interface ProductGridProps {
  items: Array<{
    id: string;
    name: string;
    status: string;
  }>;
}

export function ProductGrid({ items }: ProductGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.id} className="rounded-lg border border-ash/10 bg-ink p-5">
          <h3 className="font-heading text-2xl uppercase tracking-normal text-ash">{item.name}</h3>
          <p className="micro-copy mt-2 text-warning">{item.status}</p>
        </article>
      ))}
    </div>
  );
}
