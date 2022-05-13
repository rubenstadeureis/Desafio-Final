const {getOneUsers, putUsers, deleteUser, createUsersH, getUsersH} = require ('../model/modelusers')

exports.getAllh = async (req, res) => {
    const {data: retorno, status} = await getUsersH()
    res.status(status).json(retorno)
}

exports.createH = async (req, res) => {
    const {data: retorno, status} = await createUsersH(req.body)
    res.status(status).json(retorno)
}

exports.getOneH = async (req, res) => {
    const {data: retorno, status} = await getOneUsers (req.params.id)
    res.status(status).json(retorno)
}

exports.putH = async (req, res) => {
const {data: retorno,  status} = await putUsers ( req.params.id, req.body )
res.status(status).json(retorno)
}
exports.removeH = async (req, res) => {
    const {data:retorno, status} = await deleteUser(req.params.id)
    res.status(status).json(retorno)
}


