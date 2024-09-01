import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFetchProduct = (id: number) => {
    return useQuery({
        queryKey: [`product-${id}`],    
        queryFn: async () => {
            const response = await axios.get(`/api/products/${id}`);
            return response.data;
        }
    });
};
