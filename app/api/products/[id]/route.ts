import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const id = Number(params.id);

        if (isNaN(id)) {
            return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
        }

        const product = await prisma.product.findUnique({
            where: { id },
            include: {
                filters: true,
                address: true,
                user: true,
            },
        });

        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
    }
}