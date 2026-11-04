import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";

import { useCart, type DeliveryAddress } from "@/routes/menu/-hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";

const NOTES_MAX_LENGTH = 300;

interface FieldProps {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  className?: string;
  onChange: (value: string) => void;
}

function Field({
  id,
  label,
  value,
  placeholder,
  className,
  onChange,
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-xs text-foreground/75">
        {label}
      </label>

      <Input
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

function CartContent({ onClose }: { onClose: () => void }) {
  const items = useCart((state) => state.items);
  const address = useCart((state) => state.address);
  const notes = useCart((state) => state.notes);

  const removeItem = useCart((state) => state.removeItem);
  const setQuantity = useCart((state) => state.setQuantity);
  const clearCart = useCart((state) => state.clearCart);
  const setAddress = useCart((state) => state.setAddress);
  const setNotes = useCart((state) => state.setNotes);

  const [isConfirmingClear, setIsConfirmingClear] = useState(false);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0,
  );

  const isEmpty = items.length === 0;

  const updateAddress = (field: keyof DeliveryAddress) => (value: string) =>
    setAddress({ [field]: value });

  const handleClear = () => {
    clearCart();
    setIsConfirmingClear(false);
  };

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <Dialog.Title className="text-xl font-semibold">
            Seu carrinho
          </Dialog.Title>

          <Dialog.Description className="text-xs text-foreground/75">
            {isEmpty
              ? "Nenhum item adicionado ainda."
              : `${totalItems} ${totalItems === 1 ? "item" : "itens"} no pedido`}
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

      {isEmpty ? (
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <ShoppingCart className="size-10 text-muted" aria-hidden />

          <div>
            <p className="font-semibold">Seu carrinho está vazio</p>
            <p className="text-xs text-foreground/75">
              Toque nos itens do cardápio para adicioná-los.
            </p>
          </div>

          <Button type="button" variant="outline" onClick={onClose}>
            Voltar ao cardápio
          </Button>
        </div>
      ) : (
        <>
          <div className="-mx-1 flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-1 py-1">
            <ul className="flex flex-col gap-2">
              {items.map((item) => {
                const details = Object.values(item.options ?? {}).join(" · ");

                return (
                  <li
                    key={item.id}
                    className="flex flex-col gap-2 rounded-lg border p-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-semibold">{item.title}</p>

                        {details && (
                          <p className="text-xs text-foreground/75">
                            {details}
                          </p>
                        )}
                      </div>

                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="-mt-2 -mr-2 size-10 shrink-0"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remover ${item.title}`}
                      >
                        <Trash2 aria-hidden />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="size-8"
                          disabled={item.quantity <= 1}
                          onClick={() =>
                            setQuantity(item.id, item.quantity - 1)
                          }
                          aria-label={`Diminuir quantidade de ${item.title}`}
                        >
                          <Minus aria-hidden />
                        </Button>

                        <span
                          className="min-w-8 text-center font-semibold"
                          aria-live="polite"
                        >
                          {item.quantity}
                        </span>

                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="size-8"
                          onClick={() =>
                            setQuantity(item.id, item.quantity + 1)
                          }
                          aria-label={`Aumentar quantidade de ${item.title}`}
                        >
                          <Plus aria-hidden />
                        </Button>
                      </div>

                      <p className="font-semibold text-primary-highlight">
                        {formatPrice(item.unitPrice * item.quantity)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <fieldset className="space-y-2">
              <legend className="mb-1 font-semibold">
                Endereço de entrega
              </legend>

              <div className="grid grid-cols-6 gap-2">
                <Field
                  id="cart-street"
                  label="Rua"
                  className="col-span-4"
                  value={address.street}
                  onChange={updateAddress("street")}
                />
                <Field
                  id="cart-number"
                  label="Número"
                  className="col-span-2"
                  value={address.number}
                  onChange={updateAddress("number")}
                />
                <Field
                  id="cart-district"
                  label="Bairro"
                  className="col-span-3"
                  value={address.district}
                  onChange={updateAddress("district")}
                />
                <Field
                  id="cart-complement"
                  label="Complemento"
                  className="col-span-3"
                  placeholder="Opcional"
                  value={address.complement}
                  onChange={updateAddress("complement")}
                />
              </div>
            </fieldset>

            <div>
              <label htmlFor="cart-notes" className="mb-1 block font-semibold">
                Observações
              </label>

              <textarea
                id="cart-notes"
                value={notes}
                maxLength={NOTES_MAX_LENGTH}
                placeholder="Ex.: sem cebola, ponto de referência, troco para R$ 100..."
                onChange={(event) => setNotes(event.target.value)}
                className="min-h-24 w-full resize-none rounded-lg border border-border bg-transparent p-3 text-sm outline-none transition-all duration-300 placeholder:text-foreground/50 focus-visible:border-primary"
              />

              <p className="mt-1 text-right text-xs text-foreground/50">
                {notes.length}/{NOTES_MAX_LENGTH}
              </p>
            </div>
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-lg font-semibold text-primary-highlight">
                {formatPrice(subtotal)}
              </span>
            </div>

            {isConfirmingClear ? (
              <div className="space-y-2">
                <p className="text-center text-xs text-foreground/75">
                  Remover todos os itens do carrinho?
                </p>

                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setIsConfirmingClear(false)}
                  >
                    Cancelar
                  </Button>

                  <Button
                    type="button"
                    className="flex-1"
                    onClick={handleClear}
                  >
                    Sim, esvaziar
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setIsConfirmingClear(true)}
              >
                <Trash2 aria-hidden />
                Esvaziar carrinho
              </Button>
            )}
          </div>
        </>
      )}
    </>
  );
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function CartModal({ open, onOpenChange }: Props) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <CartContent onClose={() => onOpenChange(false)} />
    </Modal>
  );
}

export { CartModal };
