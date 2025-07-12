"use client";

import { Button } from "@/components/ui/button";

interface BtnProps {
  text?: string;
  classCSS?: string;
  onClk?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export function ButtonCm({ text, classCSS, children, onClk }: BtnProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button onClick={onClk} className={classCSS}>
        {children ?? text}
      </Button>
    </div>
  );
}
