//const {integrationHttp} = require ('../httpsService/https')
//const url = 'https://624df93353326d0cfe55cbf7.mockapi.io/users'


const {connectMongodb} = require ("../mongoDb/connectpokemons")

const {ObjectId} = require("mongodb")

exports.getUsers = async () => { 
    const collection = await connectMongodb ("pokemons","tablepoke")
    const  data = await collection.find().toArray()      
    return {data, status: 201} 
}


exports.createUsers = async ({name}) => {

    const collection = await connectMongodb ("pokemons","tablepoke")
    const { insertId } = await collection.insertOne({name})  
    return {data: {_id: insertId, name}, status: 201} 
}


exports.getOneUsers = async (name) => {

    const collection = await connectMongodb ("pokemons","tablepoke")
    const data = await collection.findOne({Name: name})
    return {data, status: 200} }


exports.putUsers = async (id, {name}) => { 
    const collection = await connectMongodb ("pokemons","tablepoke")
    collection.findOne({ _id: ObjectId(id) }, { $set: { name } })
    return {data, status: 200} 
}

exports.deleteUser = async (id) => {
    
    const collection = await connectMongodb ("pokemons","tablepoke")
    const dataUser = await collection.findOne({_id: ObjectId(id)})
    const data = await collection.deleteOne({_id: ObjectId(id)})
    return {data: dataUser, status:200}    
}