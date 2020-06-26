import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import resolvers from '../graphql/resolvers/resolvers';
import typeDefs from '../graphql/typeDefs';

import { 
    errorLogger,
    requestLogger,
} from './logger';

const port = Number(process.env.SERVICE_PORT);
const host = process.env.SERVICE_HOST;

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const app = express();

app.use(errorLogger);
app.use(requestLogger);

app.get('/', (req, res) => {
    return res.send('APIGateway says Hello World')
});

server.applyMiddleware({ app });

app.listen(port, host, () => {
    console.log( `Server running hot 🔥 on port ${ port }` );
});
