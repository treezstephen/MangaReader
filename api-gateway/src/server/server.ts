import * as Hapi        from '@hapi/hapi';
import { ApolloServer } from 'apollo-server-hapi';

import resolvers from '../graphql/resolvers/resolvers';
import typeDefs from '../graphql/typeDefs';

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const app: Hapi.Server = new Hapi.Server({
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT,
})

app.route({
    method: 'GET',
    path: '/',
    handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
        return 'ApiGateway says Hello World'
    }
});

const init = async () => {
    try {
        await server.applyMiddleware({
            app,
        });
        
        await server.installSubscriptionHandlers(app.listener);
        
        await app.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log( `Server running hot 🔥 on ${ app.info.uri }` );
}

init();
