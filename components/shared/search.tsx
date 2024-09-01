import { FC } from "react"
import { Input } from "../ui/input"
import { Search } from "lucide-react"
import { Combobox } from "./combobox"

interface Props{
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

}

export const SearchBox: FC<Props> = ({ className, onChange }) => {

    return (
        <div className=" bg-light-components-componentLight  text-light-components-title rounded-xl flex flex-row gap-10 py-3 px-3">
            {/** Search **/}
            <div className="flex items-center bg-light-inputs-inputLight rounded-lg px-3">
                <Search className="text-light-inputs-inputText/75" />
                <Input placeholder="Search.." className={className} onChange={onChange} ></Input>
            </div>
            {/** ComboBoxes **/}
            <div className="flex gap-10">
                <Combobox label="Sort By" className='w-[190px]' items={[
                    { value: "1", text: "Relevance" },
                    { value: "2", text: "By ascending price" },
                    { value: "3", text: "By descending price" },
                ]} />
                <Combobox label="Show per page" className='w-[70px]' items={[
                    { value: "5", text: "5" },
                    { value: "10", text: "10" },
                    { value: "15", text: "15" },
                ]} />
            </div>
        </div>
    )
}