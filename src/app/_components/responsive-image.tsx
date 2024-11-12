import Image from "next/image";
import { type ClassValue } from "clsx";
import { cn } from "~/lib/utils";

interface ResponsiveImageProps {
  basePath: string;
  imageName: string;
  alt: string;
  priority?: boolean;
  className?: ClassValue;
}

export default function ResponsiveImage({
  basePath,
  imageName,
  alt,
  priority = false,
  className,
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
        className={cn(className, "hidden object-cover lg:block")}
        priority={priority}
      />
      <Image
        src={tabletSrc}
        alt={alt}
        fill
        className={cn(className, "hidden object-cover md:block lg:hidden")}
        priority={priority}
      />
      <Image
        src={mobileSrc}
        alt={alt}
        fill
        className={cn(className, "block object-cover md:hidden")}
        priority={priority}
      />
    </>
  );
}
