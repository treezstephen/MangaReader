import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from "react-apollo";
import { useParams, Link } from 'react-router-dom';
import _ from 'lodash';

const query = gql`
        query($mangaId: String!) {
            mangaInfo(mangaId: $mangaId) {
                _id
                id
                alt_names
                artist
                author
                chapters {
                id
                chapter
                title
                volume
                lang_code
                timestamp
                }
                cover_url
                description
                genres {
                id
                label
                }
                hentai
                lang_flag
                lang_name
                last_chapter
                links {
                title
                url
                }
                status_text
                title
            }
        }
    `;

export default function Manga() {
    
    const { mangaId } = useParams();
    
    const { data, loading } = useQuery(query, {
        variables: { mangaId: mangaId}
    });
    
    if (loading || !data) return <div>loading</div>
    
    const { mangaInfo } = data;
    
    return (
        <div>
            {mangaInfo._id}
            {mangaInfo.id}
            {mangaInfo.title}
            {mangaInfo.artist}
            {mangaInfo.author}
            
            <div>
                {_.map(_.get(mangaInfo, 'chapters', []), chapter => {
                    return (
                        <Link key={chapter.id} to={`/mangas/${mangaId}/chapters/${chapter.id}`}>
                            {JSON.stringify(chapter)}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
