import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Manga {
        id:    ID!
        title: String!
    }
    
    type Query {
        mangas: [Manga!]!
    }
`;

export default typeDefs;
