const { gql } = require("apollo-server-express");

//Did i write the authors part for an array of authors correctly
// How do i write the savebook mutation as a input type
const typeDefs = gql`


type User:{
    _id
    username: String
    email: String
    bookCount: Int
    savedBooks:[Book]
}
type Book{
    bookId: String
    authors:[String]
    description: String
    title: String
    image: String
    link: String
}
type Auth{
    token: ID!
    user: User
}
type Query{
    me: User
}
type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors:[String]!, description: String!, title: String!, bookId:String!, image: String!, link: String! )
    removeBook(bookId!): User

}













`;
