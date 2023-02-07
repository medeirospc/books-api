import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://alura:123@cluster0.bmnxg8f.mongodb.net/node-api"
);

let db = mongoose.connection;

export default db;
