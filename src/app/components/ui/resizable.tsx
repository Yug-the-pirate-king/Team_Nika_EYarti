"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "./utils";

/**
 * Combine a component's base Tailwind classes with an optional consumer-provided className.
 * Centralises the `cn` call so each wrapper stays focused on props wiring.
 */
function withBaseClassName(baseClassName: string, className?: string) {
  return cn(baseClassName, className);
}

// Base layout styles for the panel group, including vertical direction overrides.
const panelGroupBaseClassName =
  "flex h-full w-full data-[panel-group-direction=vertical]:flex-col";

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={withBaseClassName(panelGroupBaseClassName, className)}
      {...props}
    />
  );
}

// Thin wrapper around the underlying Panel primitive to attach the component slot identifier.
function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

// Base styles for the resize handle: a visible 1px line, an invisible larger hit area,
// focus ring support, and orientation-specific overrides.
const handleBaseClassName = [
  "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center",
  "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
  "focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden",
  "data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
  "data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full",
  "data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0",
  "[&[data-panel-group-direction=vertical]>div]:rotate-90",
].join(" ");

type ResizableHandleProps = React.ComponentProps<
  typeof ResizablePrimitive.PanelResizeHandle
> & {
  withHandle?: boolean;
};

function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizableHandleProps) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={withBaseClassName(handleBaseClassName, className)}
      {...props}
    >
      {/* Optional visual grip handle rendered at the centre of the resize line. */}
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };