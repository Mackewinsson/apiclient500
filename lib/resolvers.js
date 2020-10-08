"use strict";

const connectToMongoDb = require("../db/mongoConnection");
const Clients = require("../db/models/Client");
const mongoose = require("mongoose");

//Mongo connection
connectToMongoDb();
module.exports = {
  Query: {
    getClients: async () => {
      const data = await Clients.find();
      return data;
    },
    getClient: async (id) => {
      const data = await Clients.findById(mongoose.Types.ObjectId(id));
      return data;
    },
  },
};
