import { Link } from "@tanstack/react-router";
import { Pizza } from "lucide-react";

import { Button } from "@/components/ui/button";

function Actions() {
  return (
    <ul className="flex flex-col items-center gap-y-2 w-full">
      <li className="w-full">
        <Link to="/menu">
          <Button className="w-full">
            <Pizza aria-hidden /> Ver Cardapio
          </Button>
        </Link>
      </li>
    </ul>
  );
}

export { Actions };
