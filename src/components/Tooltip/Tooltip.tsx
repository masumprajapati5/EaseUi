import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/libs/utils";

const tooltipVariants = cva(
  "pointer-events-none absolute z-50 flex items-center gap-1.5 w-max max-w-xs rounded-md px-2.5 py-1 text-xs font-medium opacity-0 shadow-lg transition-all duration-200 ease-out group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto",
  {
    variants: {
      side: {
        top: "bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0",
        right: "left-full top-1/2 ml-2 -translate-y-1/2 -translate-x-1 group-hover:translate-x-0 group-focus-within:translate-x-0",
        bottom: "left-1/2 top-full mt-2 -translate-x-1/2 -translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0",
        left: "right-full top-1/2 mr-2 -translate-y-1/2 translate-x-1 group-hover:translate-x-0 group-focus-within:translate-x-0",
      },
      variant: {
        default:
          "border border-(--border-color) bg-(--card-bg) text-(--text-color) shadow-sm",
        inverted:
          "bg-gray-900 text-gray-50 border border-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-200 shadow-md",
        glass:
          "border border-(--border-color)/80 bg-(--card-bg)/80 backdrop-blur-md text-(--text-color) shadow-lg",
        primary:
          "bg-(--primary-color) text-white shadow-md shadow-(--primary-color)/20",
      },
    },
    defaultVariants: {
      side: "top",
      variant: "default",
    },
  }
);

const arrowVariants = cva("absolute h-1.5 w-1.5 rotate-45 pointer-events-none", {
  variants: {
    side: {
      top: "top-full left-1/2 -mt-1 -translate-x-1/2",
      right: "right-full top-1/2 -mr-1 -translate-y-1/2",
      bottom: "bottom-full left-1/2 -mb-1 -translate-x-1/2",
      left: "left-full top-1/2 -ml-1 -translate-y-1/2",
    },
    variant: {
      default: "border-b border-r border-(--border-color) bg-(--card-bg)",
      inverted:
        "bg-gray-900 dark:bg-gray-100 border-b border-r border-gray-800 dark:border-gray-200",
      glass:
        "border-b border-r border-(--border-color)/80 bg-(--card-bg)/80",
      primary: "bg-(--primary-color)",
    },
  },
  defaultVariants: {
    side: "top",
    variant: "default",
  },
});

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  children: React.ReactNode;
  hotkey?: string;
  hasArrow?: boolean;
}

const Tooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(
  (
    {
      children,
      content,
      side = "top",
      variant = "default",
      hotkey,
      hasArrow = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn("group relative inline-flex", className)}
        {...props}
      >
        {children}
        <span
          role="tooltip"
          className={cn(tooltipVariants({ side, variant }))}
        >
          <span>{content}</span>
          {hotkey && (
            <kbd className="ml-1 inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-mono font-medium tracking-tight bg-black/10 dark:bg-white/15">
              {hotkey}
            </kbd>
          )}
          {hasArrow && (
            <span
              aria-hidden="true"
              className={arrowVariants({ side, variant })}
            />
          )}
        </span>
      </span>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipVariants };
