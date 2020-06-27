import express          from 'express';
import bodyParser       from 'body-parser';
import { ApolloServer } from 'apollo-server-express';

import resolvers        from '../graphql/resolvers/resolvers';
import typeDefs         from '../graphql/typeDefs';

import { 
    errorLogger,
    requestLogger,
} from './logger';

const port = Number(process.env.SERVICE_PORT);
const host = process.env.SERVICE_HOST;

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

const app = express();

//winston
app.use(errorLogger);
app.use(requestLogger);

//body-parser
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('APIGateway says Hello World');
});

server.applyMiddleware({ app });

app.listen(port, host, () => {
    console.log( `Server running hot 🔥 on port ${ port }` );
});
