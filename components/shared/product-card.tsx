
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Добавьте импорт Skeleton
import { SkeletonCard } from "./skeleton";

interface Props {
  id: number;
  className?: string;
  title: string;
  desc: string;
  price: number;
  image: string;
}

export const ProductCard: FC<Props> = ({ className, title, desc, price, image, id }) => {

 

  return (
    <div className={cn("bg-light-components-componentLight rounded-lg p-3 pt-5 flex flex-row gap-3", className)}>
      <img src={image} alt={title} className="w-40 h-40 object-cover rounded-lg" />
      <div className="flex w-full flex-col gap-2 ">
        <h3 className="text-xl font-bold text-light-components-title">{title}</h3>
        <span className="text-lg font-bold text-light-components-title">~ {price} 〒</span>
        <p className="text-sm text-light-inputs-inputText h-full">{desc}</p>
        <Link href={`products/${id}`} className="text-sm text-right text-light-buttons-btnBlue font-semibold">View Details</Link>
      </div>
    </div>
  );
};
