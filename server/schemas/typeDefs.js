const { gql } = require("apollo-server-express");

//Did i write the authors part for an array of authors correctly
// How do i write the savebook mutation as a input type and why am i getting the syntax error
const typeDefs = gql`


type User:{
    _id
    username: String
    email: String
    bookCount: Int
    savedBooks:[Book]
}
input BookInput{
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
    saveBook(bookId: String!, input:BookInput ): User
    removeBook(bookId:String!): User

}


`;
module.exports = typeDefs;
