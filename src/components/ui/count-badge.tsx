import { cn } from "@/lib/utils";

interface Props {
  count: number;
  className?: string;
}

function CountBadge({ count, className }: Props) {
  if (count <= 0) return null;

  return (
    <span
      // key força remontar a cada mudança e reexecutar a animação de "pop"
      key={count}
      role="status"
      className={cn(
        "pointer-events-none flex h-6 min-w-6 items-center justify-center rounded-full bg-primary-highlight px-1.5 text-xs font-bold text-foreground shadow-md animate-in zoom-in-50 duration-200",
        className,
      )}
    >
      {count > 99 ? "99+" : count}
      <span className="sr-only"> no carrinho</span>
    </span>
  );
}

export { CountBadge };
