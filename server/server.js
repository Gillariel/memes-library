const express = require('express');
const reload = require('express-reload');
const h = require('preact').h;
const render = require('preact-render-to-string').render;
const app = express();
const path = require('path');

const serverPath = __dirname + '/server/server.js';
app.use(reload(serverPath))

const App = ({ name }) => (
    <div>
        <p>Hellow World</p>
        <p>As server-side rendered for {name}</p>
    </div>
)

app.set('port', process.env.port || 3000)

app.get('/:name', (req, res, next) => {
    let html = render(<App name={req.params.name} />);
    // send it back wrapped up as an HTML5 document:
    res.send(`<!DOCTYPE html><html><body>${html}</body></html>`);
    //res.send('<h1>Hellow world<h1>');
})

app.listen(app.get('port'), server => {
    console.info(`Server listen on port ${app.get('port')}`);
})