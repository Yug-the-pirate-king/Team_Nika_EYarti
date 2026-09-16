"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "./utils";

const VALID_VARIANTS = ["default", "destructive"] as const;
type ItemVariant = (typeof VALID_VARIANTS)[number];

const DROPDOWN_MENU_ITEM_BASE =
  "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

const DROPDOWN_MENU_CONTENT_ANIMATION =
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

function warn(message: string) {
  if (
    typeof process !== "undefined" &&
    process.env &&
    process.env.NODE_ENV !== "production"
  ) {
    console.warn(message);
  }
}

function validateClassName(className: unknown): string | undefined {
  if (className === undefined || className === null) return undefined;
  if (typeof className !== "string") {
    warn(
      `[dropdown-menu] className must be a string, received ${typeof className}`
    );
    return String(className);
  }
  return className;
}

function validateVariant(variant: unknown): ItemVariant | undefined {
  if (variant === undefined) return undefined;
  if (VALID_VARIANTS.includes(variant as ItemVariant)) {
    return variant as ItemVariant;
  }
  warn(
    `[dropdown-menu] Invalid variant "${String(
      variant
    )}". Expected one of ${VALID_VARIANTS.join(", ")}`
  );
  return undefined;
}

function validateInset(inset: unknown): boolean | undefined {
  if (inset === undefined) return undefined;
  if (typeof inset === "boolean") return inset;
  warn(`[dropdown-menu] inset must be a boolean, received ${typeof inset}`);
  return Boolean(inset);
}

function validateSideOffset(sideOffset: unknown): number {
  if (sideOffset === undefined) return 4;
  if (
    typeof sideOffset === "number" &&
    Number.isFinite(sideOffset) &&
    sideOffset >= 0
  ) {
    return sideOffset;
  }
  warn(
    `[dropdown-menu] sideOffset must be a non-negative number, received ${String(
      sideOffset
    )}`
  );
  return 4;
}

function validateChecked(
  checked: unknown
): boolean | "indeterminate" | undefined {
  if (checked === undefined) return undefined;
  if (
    checked === true ||
    checked === false ||
    checked === "indeterminate"
  ) {
    return checked;
  }
  warn(
    `[dropdown-menu] checked must be a boolean or "indeterminate", received ${typeof checked}`
  );
  return Boolean(checked) ? true : false;
}

function DropdownMenuItemIndicator({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"
      {...props}
    >
      {children}
    </span>
  );
}

function createDropdownComponent<T extends React.ElementType>(
  Component: T,
  slot: string
) {
  const displayName = slot
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  const Wrapped = React.forwardRef<
    React.ElementRef<T>,
    React.ComponentPropsWithoutRef<T>
  >(function DropdownMenuComponent(props, ref) {
    return React.createElement(Component, {
      ...props,
      ref,
      "data-slot": slot,
    } as any);
  });
  Wrapped.displayName = displayName;
  return Wrapped;
}

const DropdownMenu = createDropdownComponent(
  DropdownMenuPrimitive.Root,
  "dropdown-menu"
);

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

const DropdownMenuTrigger = createDropdownComponent(
  DropdownMenuPrimitive.Trigger,
  "dropdown-menu-trigger"
);

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(function DropdownMenuContent(
  { className, sideOffset = 4, ...props },
  ref
) {
  const validatedClassName = React.useMemo(
    () => validateClassName(className),
    [className]
  );
  const validatedSideOffset = React.useMemo(
    () => validateSideOffset(sideOffset),
    [sideOffset]
  );

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        data-slot="dropdown-menu-content"
        sideOffset={validatedSideOffset}
        className={cn(
          "bg-popover text-popover-foreground z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          DROPDOWN_MENU_CONTENT_ANIMATION,
          validatedClassName
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
});

const DropdownMenuGroup = createDropdownComponent(
  DropdownMenuPrimitive.Group,
  "dropdown-menu-group"
);

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: ItemVariant;
  }
>(function DropdownMenuItem(
  { className, inset, variant = "default", ...props },
  ref
) {
  const validatedClassName = React.useMemo(
    () => validateClassName(className),
    [className]
  );
  const validatedVariant = React.useMemo(() => {
    const v = validateVariant(variant);
    return v ?? "default";
  }, [variant]);
  const validatedInset = React.useMemo(
    () => validateInset(inset),
    [inset]
  );

  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      data-slot="dropdown-menu-item"
      data-inset={validatedInset}
      data-variant={validatedVariant}
      className={cn(
        DROPDOWN_MENU_ITEM_BASE,
        "px-2 py-1.5 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground data-[inset]:pl-8",
        validatedClassName
      )}
      {...props}
    />
  );
});

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(function DropdownMenuCheckboxItem(
  { className, children, checked, ...props },
  ref
) {
  const validatedClassName = React.useMemo(
    () => validateClassName(className),
    [className]
  );
  const validatedChecked = React.useMemo(
    () => validateChecked(checked),
    [checked]
  );

  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        DROPDOWN_MENU_ITEM_BASE,
        "py-1.5 pr-2 pl-8",
        validatedClassName
      )}
      checked={validatedChecked}
      {...props}
    >
      <DropdownMenuItemIndicator>
        <CheckIcon className="size-4" />
      </DropdownMenuItemIndicator>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});

const DropdownMenuRadioGroup = createDropdownComponent(
  DropdownMenuPrimitive.RadioGroup,
  "dropdown-menu-radio-group"
);

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(function DropdownMenuRadioItem(
  { className, children, ...props },
  ref
) {
  const validatedClassName = React.useMemo(
    () => validateClassName(className),
    [className]
  );

  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      data-slot="dropdown-menu-radio-item"
      className={cn(
        DROPDOWN_MENU_ITEM_BASE,
        "py-1.5 pr-2 pl-8",
        validatedClassName
      )}
      {...props}
    >
      <DropdownMenuItemIndicator>
        <CircleIcon className="size-2 fill-current" />
      </DropdownMenuItemIndicator>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
});

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(function DropdownMenuLabel({ className, inset, ...props }, ref) {
  const validatedClassName = React.useMemo(
    () => validateClassName(className),
    [className]
  );
  const validatedInset = React.useMemo(
    () => validateInset(inset),
    [inset]
  );

  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      data-slot="dropdown-menu-label"
      data-inset={validatedInset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        validatedClassName
      )}
      {...props}
    />
  );
});

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(function DropdownMenuSeparator({ className, ...props }, ref) {
  const validatedClassName = React.useMemo(
    () => validateClassName(className),
    [className]
  );

  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", validatedClassName)}
      {...props}
    />
  );
});

const DropdownMenuShortcut = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(function DropdownMenuShortcut({ className, ...props }, ref) {
  const validatedClassName = React.useMemo(
    () => validateClassName(className),
    [className]
  );

  return (
    <span
      ref={ref}
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        validatedClassName
      )}
      {...props}
    />
  );
});

const DropdownMenuSub = createDropdownComponent(
  DropdownMenuPrimitive.Sub,
  "dropdown-menu-sub"
);

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(function DropdownMenuSubTrigger(
  { className, inset, children, ...props },
  ref
) {
  const validatedClassName = React.useMemo(
    () => validateClassName(className),
    [className]
  );
  const validatedInset = React.useMemo(
    () => validateInset(inset),
    [inset]
  );

  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      data-slot="dropdown-menu-sub-trigger"
      data-inset={validatedInset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        validatedClassName
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
});

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(function DropdownMenuSubContent({ className, ...props }, ref) {
  const validatedClassName = React.useMemo(
    () => validateClassName(className),
    [className]
  );

  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        DROPDOWN_MENU_CONTENT_ANIMATION,
        validatedClassName
      )}
      {...props}
    />
  );
});

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};