import Image from "next/image";

interface ResponsiveImageProps {
  basePath: string;
  imageName: string;
  alt: string;
  priority?: boolean;
}

export default function ResponsiveImage({
  basePath,
  imageName,
  alt,
  priority = false,
}: ResponsiveImageProps) {
  const desktopSrc = `${basePath}/desktop/${imageName}`;
  const tabletSrc = `${basePath}/tablet/${imageName}`;
  const mobileSrc = `${basePath}/mobile/${imageName}`;

  return (
    <>
      <Image
        src={desktopSrc}
        alt={alt}
        fill
        className="hidden object-contain lg:block"
        priority={priority}
      />
      <Image
        src={tabletSrc}
        alt={alt}
        fill
        className="hidden object-contain md:block lg:hidden"
        priority={priority}
      />
      <Image
        src={mobileSrc}
        alt={alt}
        fill
        className="block object-contain md:hidden"
        priority={priority}
      />
    </>
  );
}
