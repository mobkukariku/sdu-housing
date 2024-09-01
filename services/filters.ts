import { Filters } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getAll = async (): Promise<Filters[]> => {

    return (await axiosInstance.get<Filters[]>(ApiRoutes.FILTERS)).data;
}