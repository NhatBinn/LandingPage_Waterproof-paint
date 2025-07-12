import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface tooltipProps {
  children?: React.ReactNode;
  text?: string;
  open?: boolean;
  side?: "top" | "bottom" | "left" | "right";
}

export function TooltipCm({ children, text, open, side }: tooltipProps) {
  return (
    <Tooltip open={open}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent side={side}>
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
}
