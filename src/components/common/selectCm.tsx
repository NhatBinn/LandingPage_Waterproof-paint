"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type OptionType = {
  key: number;
  value: string;
  option: string;
};

interface SelectProps {
  onChg?: (value: string) => void;
  classCSS?: string;
  placeHolder?: string;
  label?: string;
  option: OptionType[];
}

export function SelectCm({
  onChg,
  classCSS,
  placeHolder,
  label,
  option,
}: SelectProps) {
  return (
    <Select onValueChange={onChg}>
      <SelectTrigger className={classCSS}>
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {option.map((item) => (
            <SelectItem key={item.key} value={item.value}>
              {item.option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
