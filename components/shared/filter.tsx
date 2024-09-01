import { cn } from "@/lib/utils";
import { FC } from "react";
import { Input } from "../ui/input";
import { GraduationCap, Minus } from "lucide-react";
import { FilterCheckBox } from "./filter-checkBox";
import { Image } from 'lucide-react';
import { Label } from "../ui/label";
import { FilterCheckBoxGroup } from "./filter-checkBox-group";
import { useFetchFilters } from "@/hooks/useFetchFilters";
import { Skeleton } from "../ui/skeleton";

interface Props{
    className?: string;
}

export const Filter: FC<Props> = ({className}) => {

    const{data, isLoading, error} = useFetchFilters();


    if(isLoading){
        return(
            <div className={cn("bg-light-components-componentLight  text-light-components-title rounded-xl flex flex-col gap-8 py-8 px-7", className)}>
            <div>
                <Skeleton className="mb-2 w-20 h-6" />
                <div className="flex gap-1 items-center">
                   <Skeleton className="w-24 h-8" />
                   <Minus  className="w-[58px] h-[45px] text-light-inputs-inputLight"/>
                   <Skeleton className="w-24 h-8" />
                </div>
            </div>
            <div className="flex gap-2 flex-col">
                <Skeleton className="w-10 h-5 ml-5" />
                <Skeleton className="w-25 h-5" />
                <Skeleton className="w-25 h-5" />
            </div>
            <div className="flex gap-2 flex-col">
                <Skeleton className="w-25 h-5" />
                <Skeleton className="w-25 h-5" />
                <Skeleton className="w-25 h-5" />
                <Skeleton className="w-25 h-5" />
            </div>
            <div className="flex gap-2 flex-col">
                <Skeleton className="w-25 h-5" />
                <Skeleton className="w-25 h-5" />
                <Skeleton className="w-25 h-5" />
            </div>
            <div className="flex gap-2 flex-col">
                <Skeleton className="w-25 h-5" />
                <Skeleton className="w-25 h-5" />
                <Skeleton className="w-25 h-5" />
            </div>
        
        </div>
        )
    }

    if(error){
        return(
            <div>Error</div>
        )
    }

    
    return(
        <div className={cn("bg-light-components-componentLight  text-light-components-title rounded-xl flex flex-col gap-8 py-8 px-7", className)}>
            {/** Price **/}
            <div className="">
                <Label className="font-bold mb-2 text-lg">Price</Label>
                <div className="flex gap-3 items-center">
                   <Input placeholder="From" type="number" min={0} max={1000000} value={0}  />
                   <Minus  className="w-[100px] h-[45px] text-light-inputs-inputLight"/>
                   <Input placeholder="To" type="number" min={0} max={1000000} value={1000000}  />
                </div>
            </div>

            {/** CheckBox **/}
            <div className="flex flex-col">
                {data?.slice(0, 2).map((item, index) => (
                    <FilterCheckBox
                        key={item.id + index}
                        id={String(item.id)}
                        name={item.name}
                        onCheckedChange={item?.onCheckedChange}
                    />
                ))}
            </div>
            {/** CheckBoxGroups **/}
            <div className="flex flex-col gap-5">
            <FilterCheckBoxGroup title="Numbers of room" items={data?.slice(2, 6) ?? []}/>
            <FilterCheckBoxGroup title="Who to live with" items={data?.slice(6, 9) ?? []}/>
            <FilterCheckBoxGroup title="The apartment is furnished" items={data?.slice(9, 12) ?? []}/>
                
            </div>
        </div>
    )
}