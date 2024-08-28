import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface Props{
    id: number;
    className?: string;
    title: string;
    desc: string;
    price: number;
    image: string;
}

export const ProductCard: FC<Props> = ({ className, title, desc, price, image, id}) => {
    return(
        <div className={cn("bg-light-components-componentLight rounded-lg p-3 flex flex-row gap-3", className)}>
            <img src={image} alt={title} className="w-40 h-40 object-cover rounded-lg" />
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-light-components-title">{title}</h3>
                <span className="text-lg font-bold text-light-components-title">~ {price} Tg</span>
                <p className="text-sm text-light-inputs-inputText ">{desc}</p>
                <Link href={`products/${id}`} className="text-sm text-end text-light-buttons-btnBlue font-semibold">View Details</Link>
                </div>
        </div>
    )
}