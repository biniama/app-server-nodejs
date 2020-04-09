// load up our shiny new route for users
const topicRoutes = require('./topic_placements');
const placementMappingRoutes = require('./placement_mapping');

const appRouter = (app, fs) => {

    // we've added in a default route here that handles empty routes
    // at the base API url
    app.get('/', (req, res) => {
        res.send('Welcome to the development api-server');
    });

    // run our user route module here to complete the wire up
    topicRoutes(app, fs);
    placementMappingRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;