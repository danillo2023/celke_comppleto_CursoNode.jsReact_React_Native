const express= require("express");

const app= express();

app.get("/",(req, res) =>{
    res.send("Bem vindo - Meu caro aluno(a)");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
})