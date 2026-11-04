import { CardItem } from "./CardItem";

import { useCart, useProductQuantity } from "../-hooks/useCart";

import type { Product } from "@/@types/product.type";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const { id, title, description, price, src, type } = product;

  const addItem = useCart((state) => state.addItem);
  const quantity = useProductQuantity(type, id);

  return (
    <CardItem
      title={title}
      description={description}
      price={price}
      src={src}
      quantity={quantity}
      onClick={() =>
        addItem({
          productId: id,
          category: type,
          title,
          unitPrice: price,
        })
      }
    />
  );
}

export { ProductCard };
