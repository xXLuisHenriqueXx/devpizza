import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";

import { Button } from "./ui/button";

import Logo from "@/assets/logo.png";
import { Card } from "./ui/card";
import { CountBadge } from "./ui/count-badge";
import { CartModal } from "./CartModal";

import { useCartTotalItems } from "@/routes/menu/-hooks/useCart";

interface Props {
  screen: "home" | "menu";
}

function Navbar({ screen }: Props) {
  const isMenu = screen === "menu";
  const totalItems = useCartTotalItems();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-40">
      <Card className="flex flex-row justify-between w-full max-w-4xl p-2 mx-auto">
        <Link to="/" role="button" aria-label="Go to Home">
          <Button variant="ghost" size="icon">
            <img
              className="size-8"
              src={Logo}
              alt="DevPizza logo"
              loading="lazy"
            />
          </Button>
        </Link>

        {isMenu && (
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingCart aria-hidden />
            <CountBadge
              count={totalItems}
              className="absolute top-0.5 right-0.5"
            />
          </Button>
        )}
      </Card>

      {isMenu && <CartModal open={isCartOpen} onOpenChange={setIsCartOpen} />}
    </header>
  );
}

export { Navbar };
