import express from 'express';

// Setup Express
const app = express();
const port = process.env.PORT || 3000;

// Setup JSON parsing for the request body
app.use(express.json());

// Setup our API routes.
import api from './routes';
app.use('/api', api);

// Serve up the frontend's "build" directory, if we're running in production mode.
if (process.env.NODE_ENV === 'production') {
    console.log('Running in production!');

    // Make all files in that folder public
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    // If we get any GET request we can't process using one of the server routes, serve up index.html by default.
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    });
}

// Listen to port.
app.listen(port, () => console.log(`App server listening on port ${port}!`));