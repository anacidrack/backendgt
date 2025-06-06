 const bcrypt = require ('bcrypt')


 async function  registrarUsuario(fistname, surname , email, passaword) {
    const usarioExgiiste = await encontrarUsario(email)
    if(usuarioExiste){
        throw new Error('Email já cadastrado')
    }
    const senhaCriptografada = await bcrypt.hash(passaword, 10)
    const user = await criarUsuario({fistname, surname , email, passaword: senhaCriptografada})
    return {
        id: user.id,
        fistname: user.fistname,
        surname: user.surname,
        email: user.email
    }
 }

 async function  longinUsuario(email, passaword) {

 }

 module.exports = {
    registrarUsuario,
    longinUsuario
 }