import { SectionTitle } from "./SectionTitle";
import { ProductCard } from "./ProductCard";

import type { Product } from "@/@types/product.type";

interface Props {
  show: boolean;
  data: Product[];
}

function Drinks({ show, data }: Props) {
  if (!show) return null;

  return (
    <section className="flex flex-col items-center gap-y-4 w-full">
      <SectionTitle title="Bebidas" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-4xl">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export { Drinks };
