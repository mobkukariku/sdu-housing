import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {

    const filters = await prisma.filters.findMany();

    return NextResponse.json(filters);
    
}