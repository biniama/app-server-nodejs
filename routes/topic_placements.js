const topicRoutes = (app, fs) => {

  // variables
  const dataPath = './data/topic_placements.json';

  // READ
  app.get('/topic-placements', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = topicRoutes;