import { Separator } from "@/components/ui/separator";

interface Props {
  title: string;
}

function SectionTitle({ title }: Props) {
  return (
    <div className="flex flex-row items-center gap-2 w-full max-w-4xl">
      <h1 className="text-lg font-semibold text-primary">{title}</h1>
      <Separator className="flex-1 bg-primary-highlight/50" />
    </div>
  );
}

export { SectionTitle };
