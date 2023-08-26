export const typeDefs = `

type Category {
    id: ID
    name: String
    tax: String
    createdAt: String
    updatedAt: String
}

type Query {
    categories: [Category]!
}
`; 