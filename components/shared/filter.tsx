import { cn } from "@/lib/utils";
import { FC } from "react";
import { Input } from "../ui/input";
import { GraduationCap, Minus } from "lucide-react";
import { FilterCheckBox } from "./filter-checkBox";
import { Image } from 'lucide-react';
import { Label } from "../ui/label";
import { FilterCheckBoxGroup } from "./filter-checkBox-group";

interface Props{
    className?: string;
}

export const Filter: FC<Props> = ({className}) => {
    
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
                <FilterCheckBox text="Photo is avaiable"  value="1" icon={<Image width={16} height={16} />} />
                <FilterCheckBox text="Next to SDU"  value="2" icon={<GraduationCap width={16} height={16} />} />
            </div>
            {/** CheckBoxGroups **/}
            <div className="flex flex-col gap-5">
                <FilterCheckBoxGroup title="Numbers of room" items={
                    [ 
                        { text: "1 Room", value: "1", },
                        { text: "2 Rooms", value: "2", },
                        { text: "3 Rooms", value: "3", },
                        { text: "4+ Rooms", value: "4", },
                    ]
                }/>
                <FilterCheckBoxGroup title="Who to live with" items={
                    [ 
                        { text: "Men", value: "1", },
                        { text: "Women", value: "2", },
                        { text: "Doesn't matter", value: "3",},
                    ]
                }/>
                <FilterCheckBoxGroup title="The apartment is furnished" items={
                    [ 
                        { text: "Fully", value: "1", },
                        { text: "Paritially", value: "2", },
                        { text: "Without furniture", value: "3",},
                    ]
                }/>
                
            </div>
        </div>
    )
}