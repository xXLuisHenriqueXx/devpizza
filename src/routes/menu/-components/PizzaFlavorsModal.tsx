import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

import { useCart } from "../-hooks/useCart";

import { SALTY_PIZZA_DATA } from "@/static/data/menu/salty_pizza.data";
import { SWEET_PIZZA_DATA } from "@/static/data/menu/sweet_pizza.data";
import type { Size } from "@/static/data/menu/sizes.data";

import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/formatPrice";

type FlavorKind = "salty" | "sweet";

interface Flavor {
  key: string;
  title: string;
  ingredients: string;
  src: string;
}

const toFlavors = (
  kind: FlavorKind,
  data: { id: number; title: string; ingredients: string; src: string }[],
): Flavor[] =>
  data.map(({ id, title, ingredients, src }) => ({
    key: `${kind}-${id}`,
    title,
    ingredients,
    src,
  }));

const FLAVORS_BY_KIND: Record<FlavorKind, Flavor[]> = {
  salty: toFlavors("salty", SALTY_PIZZA_DATA),
  sweet: toFlavors("sweet", SWEET_PIZZA_DATA),
};

const FLAVOR_BY_KEY = new Map(
  Object.values(FLAVORS_BY_KIND)
    .flat()
    .map((flavor) => [flavor.key, flavor]),
);

const TABS: { kind: FlavorKind; label: string }[] = [
  { kind: "salty", label: "Salgadas" },
  { kind: "sweet", label: "Doces" },
];

interface PickerProps {
  size: Size;
  onClose: () => void;
}

function FlavorPicker({ size, onClose }: PickerProps) {
  const addItem = useCart((state) => state.addItem);

  const [kind, setKind] = useState<FlavorKind>("salty");
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const max = size.maxFlavors;
  const flavorWord = max === 1 ? "sabor" : "sabores";
  const isFull = selectedKeys.length >= max;

  const selectedTitles = selectedKeys.map(
    (key) => FLAVOR_BY_KEY.get(key)?.title ?? "",
  );

  const toggleFlavor = (key: string) => {
    setSelectedKeys((current) => {
      if (current.includes(key)) return current.filter((k) => k !== key);
      if (max === 1) return [key];
      if (current.length >= max) return current;
      return [...current, key];
    });
  };

  const handleConfirm = () => {
    if (selectedKeys.length === 0) return;

    const flavors = [...selectedTitles].sort((a, b) =>
      a.localeCompare(b, "pt-BR"),
    );

    addItem({
      productId: size.id,
      category: size.type,
      title: `Pizza ${size.title}`,
      unitPrice: size.price,
      options: {
        size: size.title,
        flavors: flavors.join(", "),
      },
    });

    onClose();
  };

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <Dialog.Title className="text-xl font-semibold">
            Pizza {size.title}
          </Dialog.Title>

          <Dialog.Description className="text-xs text-foreground/75">
            {max === 1
              ? "Escolha 1 sabor."
              : `Escolha até ${max} ${flavorWord}. Você pode misturar salgados e doces.`}
          </Dialog.Description>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="-mt-2 -mr-2 shrink-0"
          onClick={onClose}
          aria-label="Fechar"
        >
          <X aria-hidden />
        </Button>
      </div>

      <div role="group" aria-label="Tipo de pizza" className="flex gap-2">
        {TABS.map((tab) => (
          <Button
            key={tab.kind}
            type="button"
            variant={kind === tab.kind ? "default" : "outline"}
            className="flex-1"
            aria-pressed={kind === tab.kind}
            onClick={() => setKind(tab.kind)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        {FLAVORS_BY_KIND[kind].map((flavor) => {
          const isSelected = selectedKeys.includes(flavor.key);

          return (
            <button
              key={flavor.key}
              type="button"
              aria-pressed={isSelected}
              disabled={!isSelected && isFull && max > 1}
              onClick={() => toggleFlavor(flavor.key)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg border p-2 text-left outline-none transition-all duration-300 cursor-pointer hover:border-primary-highlight/50 focus-visible:border-primary-highlight disabled:cursor-not-allowed disabled:opacity-50",
                isSelected && "border-primary-highlight bg-primary/10",
              )}
            >
              <img
                className="size-14 shrink-0 rounded-md object-cover object-center"
                src={flavor.src}
                alt=""
                loading="lazy"
              />

              <div className="min-w-0 flex-1">
                <p className="font-semibold">{flavor.title}</p>
                <p className="text-xs text-foreground/75">
                  {flavor.ingredients}
                </p>
              </div>

              {isSelected && (
                <Check
                  className="size-5 shrink-0 text-primary-highlight"
                  aria-hidden
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        <p className="text-xs text-foreground/75" aria-live="polite">
          {selectedKeys.length}/{max} {flavorWord}
          {selectedTitles.length > 0 && ` · ${selectedTitles.join(", ")}`}
        </p>

        <Button
          type="button"
          className="w-full"
          disabled={selectedKeys.length === 0}
          onClick={handleConfirm}
        >
          Adicionar ao carrinho · {formatPrice(size.price)}
        </Button>
      </div>
    </>
  );
}

interface Props {
  size: Size | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function PizzaFlavorsModal({ size, open, onOpenChange }: Props) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      {size && (
        <FlavorPicker
          key={size.id}
          size={size}
          onClose={() => onOpenChange(false)}
        />
      )}
    </Modal>
  );
}

export { PizzaFlavorsModal };
