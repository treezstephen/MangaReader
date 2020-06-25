import { gql } from 'apollo-server-hapi';

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
