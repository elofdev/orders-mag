import prisma from "../libs/prisma"


export const resolvers = {
    Query: {
        categories: () => {
        return prisma.category.findMany()
    },
},
}