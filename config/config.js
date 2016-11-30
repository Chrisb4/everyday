var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

//When ready to deploy change db to DB_CONN_EVERYDAY

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ajaxer'
    },
    port: process.env.PORT || 3000,
    db: process.env.DB_CONN_PRESIDENT
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
<<<<<<< HEAD
    db: 'mongodb://president:president@ds037234.mlab.com:37234/presidents'
=======
    db: process.env.DB_CONN_PRESIDENT
>>>>>>> dataStructuresHeroku
  }
};

module.exports = config[env];
