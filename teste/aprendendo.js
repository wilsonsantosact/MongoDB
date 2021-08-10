const mongoose = require("mongoose");

//Configurando o mongoose
mongoose.connect("mongodb://localhost/aprendendo", { 
    useNewUrlParser:true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB conectado!")
}).catch((erro) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + erro)
})