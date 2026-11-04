import { useState } from "react";

import { SectionTitle } from "./SectionTitle";
import { CardItem } from "./CardItem";
import { PizzaFlavorsModal } from "./PizzaFlavorsModal";

import { useProductQuantity } from "../-hooks/useCart";

import type { Size } from "@/static/data/menu/sizes.data";

interface SizeCardProps {
  size: Size;
  onSelect: (size: Size) => void;
}

function SizeCard({ size, onSelect }: SizeCardProps) {
  const { id, title, slices, maxFlavors, price, src, type } = size;
  const quantity = useProductQuantity(type, id);

  return (
    <CardItem
      title={title}
      description={`${maxFlavors} ${maxFlavors === 1 ? "sabor" : "sabores"}, ${slices}`}
      price={price}
      src={src}
      quantity={quantity}
      onClick={() => onSelect(size)}
    />
  );
}

interface Props {
  show: boolean;
  data: Size[];
}

const Sizes = ({ show, data }: Props) => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!show) return null;

  const handleSelect = (size: Size) => {
    setSelectedSize(size);
    setIsModalOpen(true);
  };

  return (
    <section className="flex flex-col items-center gap-y-4 w-full">
      <SectionTitle title="Pizzas" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-4xl">
        {data.map((size) => (
          <SizeCard key={size.id} size={size} onSelect={handleSelect} />
        ))}
      </div>

      <PizzaFlavorsModal
        size={selectedSize}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export { Sizes };
