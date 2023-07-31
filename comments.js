// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world from nodejs');
        res.end();
    } else {
        res.write('Using some other domain');
        res.end();
    }
});

server.listen('3000');

// Path: app.js
const skillsModule = require('./skills');
const membersModule = require('./members');
// const membersModule = require('./members.js'); // this is also valid

skillsModule.skillsMember();
membersModule.membersMember();