import { Clock, MapPin } from "lucide-react";

const DATA = [
  {
    id: "info-1",
    icon: Clock,
    text: "Aberto de Segunda a Sexta das 18h às 22h",
  },
  {
    id: "info-2",
    icon: MapPin,
    text: "Localizado em Rua do Dev, 10, DevLand, Brasil",
  },
];

function Info() {
  return (
    <ul className="flex flex-col items-center lg:items-start gap-y-2 w-full">
      {DATA.map(({ id, icon: Icon, text }) => (
        <li key={id} className="flex flex-row items-center gap-x-2">
          <Icon className="size-4 text-primary" aria-hidden />

          <p className="text-xs md:text-sm font-medium">{text}</p>
        </li>
      ))}
    </ul>
  );
}

export { Info };
