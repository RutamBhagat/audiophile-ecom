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
        width={1920}
        height={1080}
        className={cn(className, "hidden lg:block")}
        priority={priority}
      />
      <Image
        src={tabletSrc}
        alt={alt}
        width={1920}
        height={1080}
        className={cn(className, "hidden md:block lg:hidden")}
        priority={priority}
      />
      <Image
        src={mobileSrc}
        alt={alt}
        width={1920}
        height={1080}
        className={cn(className, "block md:hidden")}
        priority={priority}
      />
    </>
  );
}
