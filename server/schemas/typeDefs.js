const {gql} = require('apollo-server-express')

const typeDefs= gql `
type Query {
    me: User
}
input saveThisBook {
    authors: [String]
    title: String!
    description: String!
    bookId: String
    image: String
    link: String
}
type User {
    _id: String!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    bookId: String!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: saveThisBook): User
    removeBook(bookId: String!): User
}
type Auth {
    token: ID!
    user: User
}`

module.exports= typeDefs