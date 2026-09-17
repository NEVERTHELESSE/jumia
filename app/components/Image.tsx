import type { ImageT } from "~/types/type";

export default function Image({ src, alt }: ImageT) {
  return <img src={src} alt={alt} className="w-full h-full bg-cover" />;
}
