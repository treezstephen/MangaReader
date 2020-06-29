import React, {
    useCallback,
    useState,
} from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const MIN_SEARCH_LENGTH = 3;
const THROTTLE_TIME = 500;

const query = gql`
        query($searchString: String!) {
            mangas(searchString: $searchString) {
                _id
                id
                title
                description
            }
        }
    `;

export default function Home() {
    
    const [searchQuery, setSearchQuery] = useState<string>('');
    const { data, loading } = useQuery(query, {
        skip: searchQuery.length < MIN_SEARCH_LENGTH,
        variables: { searchString: searchQuery }
    });
    
    const handleChange = useCallback(
        _.throttle((searchQuery: React.SetStateAction<string>) => {
            setSearchQuery(searchQuery);
        }, THROTTLE_TIME),
        [setSearchQuery]
    )
    
    return (
        <div className='main-search-container' >
            <input
                onChange={(e) => handleChange(e.target.value)}
            />
            <div>
                {
                    _.map(_.get(data, 'mangas', []), manga => {
                        return (
                            <Link key={manga._id} to={`mangas/${manga._id}`}>
                                { JSON.stringify(manga) }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
