// generated by @ng-toolkit/universal
const port = process.env.PORT || 8080;

const server = require('./dist/angular-perf/server');

server.app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});
