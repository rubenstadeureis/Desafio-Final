const {MongoClient} = require("mongodb");


const url = 'mongodb://localhost:27017';

const client = new MongoClient (url);

exports.connectMongodb = async (pokemons, tablepoke) => {

    await client.connect();
    const db = client.db (pokemons);
    return db.collection(tablepoke);

}