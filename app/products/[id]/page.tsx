"use client";
import NotFound from "@/app/not-found";
import { BackArrow } from "@/components/shared/back-arrow";
import { Container } from "@/components/shared/container";
import { SkeletonProduct } from "@/components/shared/skeleton";
import { Button } from "@/components/ui/button";
import { useFetchProduct } from "@/hooks/useFetchProduct";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: number } }) {
    const { data, isLoading, error } = useFetchProduct(params.id);

    if (isLoading) {
        return (
            <Container>
                <BackArrow />
                <SkeletonProduct />
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <BackArrow />
                <div className="flex flex-row gap-4 mt-3">
                    <div className="w-full flex items-center justify-center">
                        <p className="text-red-500 text-lg font-semibold">Error loading product. Please try again later.</p>
                    </div>
                </div>
            </Container>
        );
    }

    if (!data) {
        return (
            <NotFound />
        );
    }
    const createdAtDate = new Date(data.createdAt);
    const formattedDate = createdAtDate.toLocaleDateString();

    return (
        <Container>
            <BackArrow />
            <div className="flex flex-row gap-4 mt-3">
                <div className="flex flex-col gap-4 w-[1200px]">
                    <img src={data?.imageUrl} alt={data?.name} className="rounded-xl object-cover h-[450px] " />
                    <div className="bg-light-components-componentLight rounded-xl p-4 pb-8 flex">
                        <div className="flex flex-col gap-3">
                            <p className="text-light-inputs-inputText font-bold text-2xl">{data?.name}</p>
                            <span className="text-light-inputs-inputText">${data?.description}</span>
                        </div>
                        <div className="w-full flex flex-col items-end text-light-buttons-btnLightText/40 font-semibold">
                            <div>
                                <span>{formattedDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin width={16} height={16} />
                                <span>{data?.address?.streetName}, {data?.address?.city},</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[350px] flex flex-col gap-4">
                    <div className="bg-light-components-componentLight gap-4 text-light-inputs-inputText items-center rounded-xl py-8 flex flex-col">
                        <p className="text-2xl font-semibold">{data?.price} 〒</p>
                        <Button variant="outline" className="w-[180px] h-[40px]">Add to Favorites</Button>
                    </div>
                    <div className="bg-light-components-componentLight flex p-6 gap-2 rounded-xl">
                        <img src={data?.user?.imageUrl} alt={data?.user?.name} className="w-[50px] h-[50px] rounded-full" />
                        <div>
                            <p className="text-xl font-semibold">{data?.user?.name}</p>
                            <Link href={`/users/${data?.user?.id}`}>
                                <span className="text-light-inputs-inputText/60 underline text-[13px]">All author's advertisements</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
