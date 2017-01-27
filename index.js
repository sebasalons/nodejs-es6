process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

const app = require('express')();
const api = require('src/api');
const version = '0.1',
      port = 8000;
const bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//Router configuration.
app.use('/api/' + version, api);
app.listen(port, function () {
    console.log(`[Booking Service] running in port ${port}`);
});