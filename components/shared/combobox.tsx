"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FC, useState } from "react"
import { Label } from "../ui/label"

type Item = {
  value: string
  text: string
}

interface ComboboxProps {
    label: string;
    items: Item[]
    className?: string,
}

export const Combobox: FC<ComboboxProps> = ({className, items,label}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className="flex items-center flex-row gap-2">
        <Label className="font-semibold">{label}</Label>
        <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild className="flex justify-between">
        <Button variant="component" className={cn("w-full",className)}>
          {value ? items.find((item) => item.value === value)?.text : items[0].text}
          <ChevronsUpDown className=" ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="">
        <Command className="">

          <CommandList >
            <CommandEmpty>No items found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn("mr-2 h-4 w-2", value === item.value ? "opacity-100" : "opacity-0")}
                  />
                  {item.text}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
  )
}
