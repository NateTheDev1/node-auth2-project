const dotenv = require("dotenv");
dotenv.config();

const server = require("./server/server");

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

server.listen(PORT, () => {
  console.log(`Server running in ${ENV} on port ${PORT}`);
});
