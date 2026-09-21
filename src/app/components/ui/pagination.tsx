import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "./utils";
import { Button, buttonVariants } from "./button";

/**
 * Development-only warning helper.
 * Logs a message in non-production environments without throwing,
 * so the UI keeps rendering while developers are alerted.
 */
function warn(message: string) {
  if (process.env.NODE_ENV !== "production") {
    console.warn(`[Pagination] ${message}`);
  }
}

/**
 * Root pagination wrapper.
 * Renders a <nav> element with the appropriate ARIA role/label.
 */
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

/**
 * Ordered list container for pagination items.
 */
function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

/**
 * Individual pagination list item.
 */
function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

// Supported button sizes derived from the Button component's variant config.
type ButtonSize = React.ComponentProps<typeof Button>["size"];

type PaginationLinkProps = {
  isActive?: boolean;
  size?: ButtonSize;
} & React.ComponentProps<"a">;

/**
 * Interactive pagination link styled as a Button variant.
 * Validates that the provided size is supported and that an actionable
 * anchor prop (href or onClick) is present.
 */
function PaginationLink({
  className,
  isActive,
  size = "icon",
  href,
  onClick,
  children,
  ...props
}: PaginationLinkProps) {
  // Validate size against the keys accepted by buttonVariants.
  // If an invalid size is supplied, fall back to the default to avoid a crash.
  const validSizes = Object.keys(
    buttonVariants({ variant: "default", size: "default" }),
  ) as unknown as ButtonSize[]; // defensive cast; real validation below

  // safer runtime check by trying to build className; if it throws we warn and reset
  let safeSize = size;
  try {
    buttonVariants({ variant: isActive ? "outline" : "ghost", size });
  } catch {
    warn(
      `Invalid size prop "${size}" passed to PaginationLink. Falling back to "icon".`,
    );
    safeSize = "icon";
  }

  // Accessibility guard: a pagination link should navigate or handle interaction.
  if (!href && !onClick && process.env.NODE_ENV !== "production") {
    warn(
      "PaginationLink should receive an href or onClick prop to be accessible and interactive.",
    );
  }

  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      href={href}
      onClick={onClick}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size: safeSize,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Previous-page link.
 * Wraps PaginationLink with a fixed label and left chevron.
 */
function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

/**
 * Next-page link.
 * Wraps PaginationLink with a fixed label and right chevron.
 */
function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

/**
 * Ellipsis indicator for truncated page ranges.
 * Visible icon is hidden from AT; an sr-only description is provided.
 */
function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};