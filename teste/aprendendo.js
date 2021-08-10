const mongoose = require("mongoose");

//Configurando o mongoose
mongoose.connect("mongodb://localhost/aprendendo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB conectado!")
}).catch((erro) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + erro)
})

//Model - Usuários
//Definindo o model
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        reuire: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

//collection
mongoose.model('usuarios', UsuarioSchema)

const Usuario = mongoose.model("usuarios");

new Usuario({
    nome: "Wilson",
    sobrenome: "Santos",
    email: "wilson.santos@actdigital.com.br",
    idade: 29,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuário criado com sucesso!")
}).catch((erro) => {
    console.log("Houve um erro ao registrar o usuário: " + erro)
})