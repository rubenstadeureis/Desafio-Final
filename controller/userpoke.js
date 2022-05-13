const {createUsers, getUsers, getOneUsers, putUsers, deleteUser} = require ('../model/modelpokemons')

exports.getAll = async (req, res) => {
    const {data: retorno, status} = await getUsers()
    res.status(status).json(retorno)
}

exports.create = async (req, res) => {
    const {data: retorno, status} = await createUsers(req.body)
    res.status(status).json(retorno)
}

exports.getOne = async (req, res) => {
    const {data: retorno, status} = await getOneUsers (req.query.name)
    res.status(status).json(retorno)
}

exports.put = async (req, res) => {
const {data: retorno,  status} = await putUsers ( req.params.id, req.body )
res.status(status).json(retorno)
}
exports.remove = async (req, res) => {
    const {data:retorno, status} = await deleteUser(req.params.id)
    res.status(status).json(retorno)
}