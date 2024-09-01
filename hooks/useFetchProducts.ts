
import { Api } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchProducts = (searchQuery:string) => {
    return useQuery({
        queryKey: ["products", searchQuery],
        queryFn: async () => {
            return Api.products.search(searchQuery);
        }
    })
}