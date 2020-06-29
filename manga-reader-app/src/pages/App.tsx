import React, {
    FunctionComponent, 
} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './Home';
import { ApolloProvider } from 'react-apollo';
import graphqlClient from '../api/graphqlClient';
import Manga from './Manga';
import Chapter from './Chapter';

export const App : FunctionComponent = () => {
    return (
        <div className="main-container">
            <Router>
                <ApolloProvider client={graphqlClient}>
                    <Switch>
                        <Route path='/mangas/:mangaId/chapters/:chapterId' component={Chapter} />
                        <Route path='/mangas/:mangaId' component={Manga} />
                        <Route path='/'                component={Home} />
                    </Switch>
                </ApolloProvider>
            </Router>
        </div>
    )
}
