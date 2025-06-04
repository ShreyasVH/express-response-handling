const dbName = args[0] || "defaultDB";
const collectionName = "books";

const targetDb = db.getSiblingDB(dbName);

targetDb.createCollection(collectionName, {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "name", "author"],
      properties: {
        _id: {
          bsonType: "int",
          description: "_id must be an integer and is required"
        },
        name: {
          bsonType: "string",
          description: "name must be a string and is required"
        },
        author: {
          bsonType: "string",
          description: "author must be a string and is required"
        }
      }
    }
  }
});

targetDb[collectionName].insertOne({
  _id: 1,
  name: "Sample Book",
  author: "Anonymous"
});

targetDb.createCollection(collectionName, {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id"],
      properties: {
        _id: {
          bsonType: "string",
          description: "_id must be a string and is required"
        },
        sequenceValue: {
          bsonType: "int",
          description: "sequenceValue must be a number",
          default: 1
        }
      }
    }
  }
});

targetDb[collectionName].insertOne({
  _id: "books",
  sequenceValue: 1
});