const app = require('express')();
const api = require('./src/api');
const version = '0.1',
      port = 3000;

//Router configuration.
app.use('/api/' + version, api);
app.listen(port, function () {
    console.log(`[Atrapalo Booking Service] running in port ${port}`);
});