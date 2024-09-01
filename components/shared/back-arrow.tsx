'use client'
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { FC } from "react";

interface Props {
    className?: string,
}

export const BackArrow:FC = ( className, onClick ) => {


    const goToPreviousPage = () => {
        window.history.back()
    }

    return(
        <div className={cn("cursor-pointer", className)} onClick={goToPreviousPage}>
            <ArrowLeft />
        </div>
    )
}