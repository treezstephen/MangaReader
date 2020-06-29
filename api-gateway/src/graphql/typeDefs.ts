import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Rating {
        value: Float
        votes: Int
    }
    
    type Genre {
        id: Int!
        label: String!
    }
    
    type Link {
        title: String!
        url: String!
    }
    
    type MangaChapter {
        id: Int!
        chapter: String!
        lang_code: String!
        timestamp: Int!
        title: String!
        volume: String!
    }

    type Manga {
        _id: String!
        id: ID!
        description: String!
        follows: Int
        image_url: String
        lang_name: String
        rating: Rating!
        title: String!
        views: Int
    }
    
    type MangaInfo {
        _id: String!
        id: Int!
        alt_names: [String]!
        artist: String!
        author: String!
        chapters: [MangaChapter]
        cover_url: String!
        description: String!
        genres: [Genre!]!
        hentai: Int
        lang_flag: String!
        lang_name: String!
        last_chapter: String
        links: [Link!]!
        status_text: String!
        title: String
    }
    
    type Chapter {
        id: Int
        chapter: String
        comments: Int
        hash: String
        lang_code: String
        lang_name: String
        long_strip: Int
        manga_id: Int
        page_array: [String]
        status: String
        timestamp: Int
        title: String
        volume: String
    }
    
    type Query {
        chapter(mangaId: String!, chapterId: String!): Chapter!
        mangas(searchString: String!): [Manga!]!
        mangaInfo(mangaId: String!): MangaInfo!
    }
`;

export default typeDefs;
