import * as Hapi from '@hapi/hapi';

const server: Hapi.Server = new Hapi.Server({
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT,
})

server.route({
    method: 'GET',
    path: '/',
    handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
        return 'ApiGateway says Hello World'
    }
});

const init = async () => {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log( `Server running hot 🔥 on ${ server.info.uri }` );
}

init();
