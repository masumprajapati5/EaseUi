import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const carouselVariants = cva(
  "relative w-full overflow-hidden rounded-xl border border-(--border-color)",
  {
    variants: {
      variant: {
        default: "bg-(--card-bg)",
        muted: "bg-(--bg-color)",
        contrast: "bg-(--text-color) text-(--bg-color)",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
  showIndicators?: boolean;
  ariaLabel?: string;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      items,
      autoPlay = false,
      interval = 5000,
      loop = true,
      showIndicators = true,
      ariaLabel = "Carousel",
      variant,
      className,
      ...props
    },
    ref
  ) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const hasItems = items.length > 0;
    const lastIndex = Math.max(items.length - 1, 0);

    useEffect(() => {
      if (!autoPlay || items.length < 2) return;

      const timer = window.setInterval(() => {
        setActiveIndex((currentIndex) => {
          if (currentIndex === lastIndex) return loop ? 0 : currentIndex;
          return currentIndex + 1;
        });
      }, interval);

      return () => window.clearInterval(timer);
    }, [autoPlay, interval, items.length, lastIndex, loop]);

    const goToPrevious = () => {
      setActiveIndex((currentIndex) => {
        if (currentIndex === 0) return loop ? lastIndex : 0;
        return currentIndex - 1;
      });
    };

    const goToNext = () => {
      setActiveIndex((currentIndex) => {
        if (currentIndex === lastIndex) return loop ? 0 : lastIndex;
        return currentIndex + 1;
      });
    };

    return (
      <div
        ref={ref}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        className={cn(carouselVariants({ variant }), className)}
        {...props}
      >
        {hasItems ? (
          <>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${items.length}`}
                    aria-hidden={index !== activeIndex}
                    className="w-full shrink-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={goToPrevious}
                  disabled={!loop && activeIndex === 0}
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-(--border-color) bg-(--card-bg)/90 text-(--text-color) shadow-sm transition-colors hover:bg-(--card-bg) disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={goToNext}
                  disabled={!loop && activeIndex === lastIndex}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-(--border-color) bg-(--card-bg)/90 text-(--text-color) shadow-sm transition-colors hover:bg-(--card-bg) disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            {showIndicators && items.length > 1 && (
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {items.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      index === activeIndex
                        ? "w-5 bg-(--primary-color)"
                        : "w-1.5 bg-(--muted-text-color)/60"
                    )}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="p-8 text-center text-sm text-(--muted-text-color)">
            No slides available.
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export { Carousel, carouselVariants };
