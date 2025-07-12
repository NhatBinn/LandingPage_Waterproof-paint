"use client";

import { Button } from "@/components/ui/button";

interface BtnProps {
  text?: string;
  classCSS?: string;
  onClk?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ButtonCm({ text, classCSS, onClk }: BtnProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button onClick={onClk} className={classCSS}>
        {text}
      </Button>
    </div>
  );
}
