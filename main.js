const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const config = require('./config');
const Path = require('path');
const Inert = require('inert');
const dotenv = require('dotenv');
dotenv.config();
var port = process.env.PORT || 8080;
const init = async () => {

    const server = Hapi.server({
        port: port,
        host: 'localhost',
        routes: {
            files: {
                relativeTo: Path.join(__dirname,'client/build')
            }
        }
    });
    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true
            }
        }});
    routes.map(route=>{
        server.route(route);
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();