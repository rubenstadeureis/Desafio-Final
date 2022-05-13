const { Db } = require("mongodb")
const {connectMongodb} = require ("./connectpokemons")

exports.getSearch = async (busca) => {

    const collection = await connectMongodb ('pokemons', 'tablepoke')
    const data = await collection.find({$text: {$search:`${busca}`}},{score:{$meta: "textScore"}}).sort({score: {$meta:"textscore"}}).toArray()
    return {data, stats: 200}
}

