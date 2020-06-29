import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from "react-apollo";
import { useParams, Link } from 'react-router-dom';
import _ from 'lodash';

const query = gql`
        query($mangaId: String!, $chapterId: String!) {
            chapter(mangaId: $mangaId, chapterId: $chapterId) {
                id
                chapter
                comments
                hash
                lang_code
                lang_name
                long_strip
                manga_id
                page_array
                status
                timestamp
                title
                volume
            }
        }
    `;

export default function Chapter() {
    const { 
        chapterId,
        mangaId,
    } = useParams();
    
    const { data, loading } = useQuery(query, {
        variables: { 
            chapterId,
            mangaId
        }
    });
    
    if (loading || !data) return <div>loading</div>
    
    const { chapter } = data;
    
    return (
        <div>
            {
                _.map(_.get(chapter, 'page_array', []), page => {
                    return (
                        <div>
                            <img src={page} />
                        </div>
                    )
                })
            }
        </div>
    )
}
