import * as Hapi from '@hapi/hapi';

const app: Hapi.Server = new Hapi.Server({
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT,
})

app.route({
    method: 'GET',
    path: '/',
    handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
        return 'MangaService says Hello World'
    }
});

const init = async () => {
    try {
        await app.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log( `Server running hot 🔥 on ${ app.info.uri }` );
}

init();
