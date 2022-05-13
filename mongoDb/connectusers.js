const {MongoClient} = require("mongodb");



const url = 'mongodb://localhost:27017';

const client = new MongoClient (url);

exports.connectMongodb = async (pokemons, tableusers) => {

    await client.connect();
    const db = client.db (pokemons);
    return db.collection(tableusers);

}