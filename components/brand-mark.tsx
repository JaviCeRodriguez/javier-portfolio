import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  decorative?: boolean;
}

export function BrandMark({ className, decorative = true }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Monograma JR"}
      className={cn("size-9", className)}
    >
      <path d="M7 8h9v13.2c0 4.4-2.5 6.8-6.6 6.8-1.4 0-2.7-.3-3.8-1l1.4-3.4c.6.4 1.3.6 2 .6 1.2 0 2-.8 2-2.5V11.6H7V8Z" fill="currentColor" />
      <path d="M19.5 8H25c3.7 0 5.9 1.9 5.9 5.1 0 2.2-1.1 3.8-3 4.6L32 28h-5l-3.5-8.8h-.2V28h-3.8V8Zm3.8 3.5v4.5h1.4c1.5 0 2.3-.8 2.3-2.3 0-1.4-.8-2.2-2.3-2.2h-1.4Z" fill="currentColor" />
      <path d="M7 30.5h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
