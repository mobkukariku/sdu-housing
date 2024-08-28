import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export interface FilterCheckBoxProps{
    className?: string;
    text: string;
    checked?: boolean;
    value:string;
    icon?: React.ReactNode | null;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked:boolean) => void;
}

export const FilterCheckBox: React.FC<FilterCheckBoxProps> = ({
        className,
        text, 
        checked, 
        value,
        icon,
        endAdornment, 
        onCheckedChange
    }) => {
    
        return(
            <div className={cn('flex items-center gap-2', className)}>
                <Checkbox
                    checked={checked}
                    onCheckedChange={onCheckedChange}
                    value={value}
                    id={`checkbox-${String(value)}`}
                    className="rounded-[3px] w-5 h-5"
                />
                <div className="flex gap-1 items-center bottom">
                    <span>{icon}</span>
                    <Label className="text-base">{text}</Label>
                </div>
            </div>
    )
}