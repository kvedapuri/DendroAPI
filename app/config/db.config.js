module.exports = {
    HOST: "35.192.21.147",
    USER: "root",
    PASSWORD: "dendrodb",
    DB: "dendrodb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
