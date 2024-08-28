import { prisma } from "./prisma-client";

async function up(){
    await prisma.product.createMany({
        data: [
            {
                name: "Product 1",
                description: "Product 1 description",
                price: 1,
                imageUrl: "https://picsum.photos/200/300",
                userId: 1,
            }
        ]
    })
}