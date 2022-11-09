// path: ./config/env/production/database.js
// const { parse } = require("pg-connection-string");

// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env("DATABASE_URL"));

//   return {
//     connection: {
//       client: "postgres",
//       connection: {
//         host,
//         port,
//         database,
//         user,
//         password,
//       },
//       debug: false,
//     },
//   };
// };

// path: ./config/env/production/database.js

module.exports = ({ env }) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST"),
        port: env("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
      },
      debug: false,
    },
  };
};
