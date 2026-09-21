"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

// Development-only flag used to gate runtime checks without affecting production.
const isDev =
  typeof process !== "undefined" && process.env?.NODE_ENV !== "production";

// Lightweight runtime validation for props that are forwarded to the underlying
// DOM element. TypeScript already catches most issues, but this adds a safety net
// for callers that bypass the types or receive dynamic values.
function validateDomProps(
  componentName: string,
  props: Record<string, unknown>
) {
  if (!isDev) return;

  if ("className" in props && typeof props.className !== "string") {
    console.warn(
      `[${componentName}] className should be a string, received ${typeof props.className}.`
    );
  }

  if (
    "style" in props &&
    props.style !== null &&
    props.style !== undefined &&
    typeof props.style !== "object"
  ) {
    console.warn(
      `[${componentName}] style should be an object, received ${typeof props.style}.`
    );
  }
}

// Type aliases for the wrapped Radix primitives.
type CollapsibleRef = ElementRef<typeof CollapsiblePrimitive.Root>;
type CollapsibleProps = ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Root
>;

type CollapsibleTriggerRef = ElementRef<
  typeof CollapsiblePrimitive.CollapsibleTrigger
>;
type CollapsibleTriggerProps = ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.CollapsibleTrigger
>;

type CollapsibleContentRef = ElementRef<
  typeof CollapsiblePrimitive.CollapsibleContent
>;
type CollapsibleContentProps = ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.CollapsibleContent
>;

// Wrapper around Radix Collapsible.Root that forwards refs and injects a stable
// data-slot marker for styling / test selectors.
const Collapsible = forwardRef<CollapsibleRef, CollapsibleProps>((props, ref) => {
  validateDomProps("Collapsible", props as Record<string, unknown>);

  return (
    <CollapsiblePrimitive.Root
      ref={ref}
      data-slot="collapsible"
      {...props}
    />
  );
});
Collapsible.displayName = "Collapsible";

// Wrapper around Radix Collapsible.Trigger.
const CollapsibleTrigger = forwardRef<
  CollapsibleTriggerRef,
  CollapsibleTriggerProps
>((props, ref) => {
  validateDomProps("CollapsibleTrigger", props as Record<string, unknown>);

  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      ref={ref}
      data-slot="collapsible-trigger"
      {...props}
    />
  );
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";

// Wrapper around Radix Collapsible.Content.
const CollapsibleContent = forwardRef<
  CollapsibleContentRef,
  CollapsibleContentProps
>((props, ref) => {
  validateDomProps("CollapsibleContent", props as Record<string, unknown>);

  return (
    <CollapsiblePrimitive.CollapsibleContent
      ref={ref}
      data-slot="collapsible-content"
      {...props}
    />
  );
});
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };