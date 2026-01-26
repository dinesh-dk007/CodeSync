"use client"

import * as React from "react";
import { Group, Panel, Separator } from "react-resizable-panels";
import { GripVerticalIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof Group>) {
  return (
    <Group
      orientation="vertical"
      className={cn("flex h-full w-full", className)}
      {...props}
    />
  );
}

function ResizablePanel(props: React.ComponentProps<typeof Panel>) {
  return <Panel {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
}) {
  return (
    <Separator
      {...props}
      className={cn(
        "relative flex items-center justify-center bg-border data-[panel-group-direction=vertical]:h-1 data-[panel-group-direction=vertical]:cursor-row-resize data-[panel-group-direction=horizontal]:w-1 data-[panel-group-direction=horizontal]:cursor-col-resize",
        className
      )}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-4 items-center justify-center rounded border bg-border">
          <GripVerticalIcon className="size-3" />
        </div>
      )}
    </Separator>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
