import { OctagonX } from "lucide-react";
import { FC } from "react";


export const ProductsNotFoundError: FC = () => {

    return (
        <div className="text-center">
            <h1 className=" flex items-center justify-center mt-5 text-2xl font-semibold">
                <OctagonX className="text-red-500 mr-2" />
                Products with that query not found
                </h1>
        </div>
    )
}