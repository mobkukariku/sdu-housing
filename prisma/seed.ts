
import { Filters } from "./constants";
import { prisma } from "./prisma-client";

async function up() {
    
  await prisma.product.create(
    {
      data: {
        name: "нужна девочка на подселение",
        description: "нужна 1 девочка на подселение. все удобства и бытовая техника есть.Евроремонт.Квартира абсолютно новая,первые жители)",
        price: 67000,
        filters: {
          connect: [{
            name: Filters[0].name
          },
          {
            name: Filters[3].name
          },
          {
            name: Filters[6].name
          },
          {
            name: Filters[9].name
          },]
        },
        address:{
          create: {
            city: "Kaskelen",
            streetName: "Arnau, 12",
            latitude: 46.755,
            longitude: 23.5,
          }
        },
        userId:3,
        imageUrl: "https://alakcell-photos-kr.kcdn.kz/webp/49/49f33d0c-bed0-43e6-a22f-48f089871dea/1-750x470.webp",

      }
    }
  )
      
}

async function down() {
  
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
