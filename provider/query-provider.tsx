"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props{
    children: React.ReactNode;
}

const queryClient = new QueryClient();


export const QueryProvider = ({ children }: Props) => {

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}