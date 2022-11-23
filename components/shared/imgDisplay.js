import Image from "next/image";

export default function ImgDisplay({ path, width, height, alt }) {
  return (
    <Image
      priority
      loader={() => {
        return `${path}?w=${width}&q=75`;
      }}
      layout="fixed"
      objectFit="cover"
      src={path}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
