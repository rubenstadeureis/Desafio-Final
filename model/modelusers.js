
const {connectMongodb} = require ("../mongoDb/connectusers")

const {ObjectId} = require("mongodb")

exports.getUsersH = async () => { 
    const collection = await connectMongodb ("pokemons","tableusers")
    const  data = await collection.find().toArray()  
    return {data, status: 201} 
}


exports.createUsersH = async ({email,senha}) => {
    const collection = await connectMongodb ("pokemons","tableusers")
    const { insertId } = await collection.insertOne({email, senha})  
    return {data: {_id: insertId, email, senha}, status: 201} 
}


