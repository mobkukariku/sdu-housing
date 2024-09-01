import { Api } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
export const useFetchFilters = () => {
    return useQuery({
        queryKey: ["filters"],
        queryFn: async () => {
            return Api.filters.getAll();
        }
    })
}