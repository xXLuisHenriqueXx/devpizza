import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "w-full h-12 px-4 bg-transparent focus-visible:border-primary border border-border rounded-lg transition-all duration-300 outline-none text-sm placeholder:text-foreground/50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
