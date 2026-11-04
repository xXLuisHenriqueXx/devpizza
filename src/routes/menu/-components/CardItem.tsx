import { Card } from "@/components/ui/card";
import { CountBadge } from "@/components/ui/count-badge";

import { formatPrice } from "@/utils/formatPrice";

interface Props {
  title: string;
  description: string;
  price?: number;
  src: string;
  quantity?: number;
  onClick?: () => void;
}

function CardItem({
  title,
  description,
  price,
  src,
  quantity = 0,
  onClick,
}: Props) {
  const isInteractive = Boolean(onClick);

  return (
    <div className="relative">
      <Card
        className="h-full flex-row justify-between items-center hover:border-primary-highlight/50 focus-visible:border-primary-highlight outline-none cursor-pointer select-none"
        onClick={onClick}
        role={isInteractive ? "button" : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        onKeyDown={
          isInteractive
            ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onClick?.();
                }
              }
            : undefined
        }
      >
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{title}</h2>

          <p className="text-xs text-foreground/75">{description}</p>

          {price && (
            <p className="font-semibold text-primary-highlight">
              {formatPrice(price)}
            </p>
          )}
        </div>

        <img
          className="size-24 object-cover object-center rounded-lg"
          src={src}
          alt={title}
        />
      </Card>

      <CountBadge count={quantity} className="absolute -top-1.5 -right-1.5" />
    </div>
  );
}

export { CardItem };
