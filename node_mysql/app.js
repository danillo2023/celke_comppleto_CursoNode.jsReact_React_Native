const express = require("express");

const app = express();

app.use(express.json());

app.get("/usuarios", (req, res) => {
    return res.json({
        erro: false,
        nome: "Cesar",
        email: "cesar@celke.com.br"
    });
});

app.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    return res.json({
        erro: false,
        id,
        nome: "Cesar",
        email: "cesar@celke.com.br"
    });
});
app.post("/usuario", (req, res) => {
    const { nome, email } = req.body;
    return res.json({
        erro: false,
        nome,
        email
    });
});


app.put("/usuario", (req, res) => {
    const {id,  nome, email } = req.body;
    return res.json({
        erro: false,
        id,
        nome,
        email
    });
});

app.delete("/usuario/:id", (req, res) => {
   // const id = req.params.id;
   const {id} = req.params;
    return res.json({
        erro: false,
        id
    });
});

app.listen(8081, () => {
    console.log("servidor iniciado na porta 8081: http://localhost:8081")
}); 