"use strict";

const connectToMongoDb = require("../db/mongoConnection");
const Clients = require("../db/models/Client");

//Mongo connection
connectToMongoDb();
module.exports = {
  Query: {
    getClients: async () => {
      const data = await Clients.find();
      return data;
    },
    getClient: async (root, { id }) => {
      const data = await Clients.findById(id);
      return data;
    },
  },
};
