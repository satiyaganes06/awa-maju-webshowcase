
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  animation?: "fade-in" | "scale-in" | "blur-in" | "float";
  delay?: number;
  className?: string;
}

const AnimatedImage = ({ 
  src, 
  alt, 
  className, 
  animation = "fade-in", 
  delay = 0,
  ...props 
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const animationClass = isInView ? `animate-${animation}` : "";
  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div className="relative overflow-hidden">
      <div
        className={cn(
          "relative bg-muted/50 rounded-lg overflow-hidden",
          className
        )}
      >
        {!isLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
        <img
          ref={imgRef}
          src={src}
          alt={alt || "Image"}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            isInView && animationClass,
            delayClass,
            className
          )}
          onLoad={handleImageLoad}
          loading="lazy"
          {...props}
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
