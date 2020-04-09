const placementMappingRoutes = (app, fs) => {

  // variables
  const dataPath = './data/placement_mapping.json';

  // READ
  app.get('/placement_mapping.json', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = placementMappingRoutes;