

async function registrar(req, res) {
    const {firtname, surname, email, password} = req.body
    try{
        const user = await registrarUsuario(firtname, surname, email, password) 
        res.status(201).json(user)

    } catch (error){
        res.status(400).json({error: error.message})

    }
    
}

async function  longin(req, res) {
    const {email, password} = req.body
    try {
        const result = await longinUsuario(email, passaword)
        res.status(200).json(result)
    } catch (error){
    res.status(401).json({error: error.message})

}
}

module.exports = {
    registrar,
    longin
}