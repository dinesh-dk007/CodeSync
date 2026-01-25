"use client"

import { GripVertical } from "lucide-react"
import { Panel, Group, Separator } from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  direction = "horizontal",
  ...props
}: React.ComponentProps<typeof Group> & { direction?: "horizontal" | "vertical" }) => (
  <Group
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col group",
      className
    )}
    orientation={direction}
    data-panel-group-direction={direction}
    {...props}
  />
)

const ResizablePanel = Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean
}) => (
  <Separator
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 group-data-[panel-group-direction=vertical]:h-px group-data-[panel-group-direction=vertical]:w-full group-data-[panel-group-direction=vertical]:after:left-0 group-data-[panel-group-direction=vertical]:after:h-1 group-data-[panel-group-direction=vertical]:after:w-full group-data-[panel-group-direction=vertical]:after:-translate-y-1/2 group-data-[panel-group-direction=vertical]:after:translate-x-0 [&>div]:group-data-[panel-group-direction=vertical]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
