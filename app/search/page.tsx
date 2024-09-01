"use client"
import { Container } from "@/components/shared/container";
import { ProductsNotFoundError } from "@/components/shared/error";
import { Filter } from "@/components/shared/filter";
import { ProductCard } from "@/components/shared/product-card";
import { SearchBox } from "@/components/shared/search";
import { SkeletonCard } from "@/components/shared/skeleton";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { Product } from "@prisma/client";
import { useState } from "react";
import { useDebounce } from "react-use";

export default function SearchPage (){
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [serchQuery, setSearchQuery] = useState("");
    const {data, isLoading, error} = useFetchProducts(serchQuery, selectedFilters);
    

    useDebounce(() => {
        setSearchQuery(serchQuery);
    }, 500, [serchQuery]);

    const handleFilterChange = (filterName: string) => {
        setSelectedFilters(prevFilters =>
            prevFilters.includes(filterName)
                ? prevFilters.filter(f => f !== filterName)
                : [...prevFilters, filterName]
        );
    };

    if (isLoading) {
        return (
            <Container className="mt-10">
                <div className="flex justify-center gap-3">
                    <Filter className="w-[400px] h-full" onFilterChange={handleFilterChange} selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
                    <div className="w-full">
                        <SearchBox />
                        <div className="flex flex-col mt-3 gap-3">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-10">
                <div className="flex justify-center gap-3">
                    <Filter className="w-[400px] h-full" onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
                    <div className="w-full">
                        <SearchBox />
                        <div className="flex flex-col mt-3 gap-3">
                            <ProductsNotFoundError />
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    if (!data || data.length === 0) {
        return (
            <Container className="mt-10">
                <div className="flex justify-center gap-3">
                    <Filter className="w-[400px] h-full" onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
                    <div className="w-full">
                        <SearchBox onChange={(e) => setSearchQuery(e.target.value)}/>
                        <div className="flex flex-col mt-3 gap-3">
                            <ProductsNotFoundError />
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    return(
        <Container className="mt-10">
            <div className="flex justify-center gap-3">
                {/* Filter */}
                <Filter  className="w-[400px] h-full" onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />

                <div className="w-full">
                    {/* Search */}
                    <SearchBox onChange={(e) => setSearchQuery(e.target.value)} />
                    {/* Results */}
                    <div className="flex flex-col mt-3 gap-3">
                        {data.map((product:Product) => (
                            <ProductCard title={product.name} desc={product.description} image={product.imageUrl} price={product.price} key={product.id} id={product.id} />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}