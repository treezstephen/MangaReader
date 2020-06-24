import * as Hapi from '@hapi/hapi';

const host = "localhost";
const port = 8001;

const server: Hapi.Server = new Hapi.Server({
    host,
    port,
})

server.route({
    method: 'GET',
    path: '/',
    handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {

        return 'Hello World!';
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
    console.log( `Server running @ ${ server.info.uri }` );
}

init();
