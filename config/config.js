var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ajaxer'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://president:president@ds037234.mlab.com:37234/presidents'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ajaxer'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/ajaxer-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ajaxer'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/ajaxer-production'
  }
};

module.exports = config[env];
