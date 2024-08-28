import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { FilterCheckBox, FilterCheckBoxProps } from "./filter-checkBox";


type Item = FilterCheckBoxProps;
interface Props{
    title: string;
    className?: string;
    items: Item[];
}

export const FilterCheckBoxGroup: React.FC<Props> = ({
    title,
    className,
    items,
    }) => {
    return(
        <div className={cn("flex flex-col gap-2", className)}>
            <Label className="font-bold text-lg">{title}</Label>
            {items.map((item, index) => (
                <FilterCheckBox
                    key={item.value + index}
                    text={item.text}
                    value={item.value}
                    icon={item.icon}
                    onCheckedChange={item.onCheckedChange}
                />
            ))}
        </div>
    )
}