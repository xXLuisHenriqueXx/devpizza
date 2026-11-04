import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "group/card flex flex-col gap-4 p-4 bg-card border border-transparent rounded-xl text-sm transition-all duration-300 overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

export { Card };
