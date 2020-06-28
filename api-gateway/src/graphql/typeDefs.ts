import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Rating {
        value: Float
        votes: Int
    }

    type Manga {
        _id:   String!
        description: String!
        follows: Int
        id:    ID!
        image_url: String
        lang_name: String
        title: String!
        rating: Rating!
        views: Int
    }
    
    type Query {
        mangas(searchString: String!): [Manga!]!
    }
`;

export default typeDefs;
