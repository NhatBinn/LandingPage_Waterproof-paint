"use client";

import { Input } from "@/components/ui/input";
import React from "react";

interface InputProps {
  onChg?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classCSS?: string;
  placeHolder?: string;
}

export function InputCm({ onChg, classCSS, placeHolder }: InputProps) {
  return (
    <Input
      onChange={onChg}
      type="text"
      placeholder={placeHolder}
      className={classCSS}
    />
  );
}
