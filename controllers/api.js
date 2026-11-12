
exports.api = function(req, res) {
  res.json({
    message: 'Welcome to Assignment 11 REST API',
    resources: [
      {
        name: 'waterfalls',
        url: '/resource/waterfalls',
        methods: ['GET', 'POST']
      }
    ]
  });
};

