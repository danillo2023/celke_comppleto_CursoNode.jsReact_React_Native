const express = require("express");
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();



app.use(express.json());

app.get("/users", async (req, res) => {

    await User.findAll({
        attributes: ['id', 'name', 'email', "password"], order: [['id', 'DESC']]
    })
        .then((users) => {
            return res.json({
                erro: false,
                users
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                menssagem: "Erro: usuário não cadastrado com sucesso"
            });
        });

});

app.get("/users/:id", async (req, res) => {
    const { id } = req.params;

    // await User.findAll({ where: { id: id } })
    await User.findByPk(id)
        .then((users) => {
            return res.json({
                erro: false,
                users: users
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                menssagem: "Erro: usuário não cadastrado com sucesso"
            });
        })
});

app.post("/user", async (req, res) => {
    var dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 10);

    await User.create(dados)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "User cadastro com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                menssagem: "Erro: usuário não cadastrado com sucesso"
            });
        });
});

app.put("/user", async (req, res) => {
    const { id, name, email } = req.body;

    await User.update(req.body, { where: { id } })
        .then(() => {
            return res.json({
                erro: false,
                menssagem: "Usuário editado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                menssagem: "Erro: usuário não editado com sucesso"
            });
        })
});

app.put("/user-senha", async (req, res) => {
    const { id, password } = req.body;

    var senhaCrypt = await bcrypt.hash(password, 8);

    await User.update({ password: senhaCrypt }, { where: { id } })
        .then(() => {
            return res.json({
                erro: false,
                menssagem: "Senha editada com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                menssagem: "Erro: Senha não editada com sucesso"
            });
        });
});

app.delete("/user/:id", async (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    await User.destroy({ where: { id } })
        .then(() => {
            return res.json({
                menssagem: "Usuário apagado com sucesso"
            });

        }).catch(() => {
            return res.status(400).json({
                erro: true,
                menssagem: "Erro: usuário não apagado com sucesso"
            });
        });
})

app.post("/login", async (req, res) => {
    const user = await User.findOne({
        attributes:['id','name','email', 'password'],
         where: {
            email: req.body.email
        }
    });
    if(user === null){
        return res.status(400).json({
            erro: true,
            menssagem: "Erro: Usuario não encontrado!"
        });
    }
    if (!(await bcrypt.compare(req.body.password, user.password))){
        return res.status(400).json({
            erro: true,
            menssagem: "Erro: Senha inválida!"
        });
    }

    return res.json({
        erro: false,
        menssagem: "Login realizado com sucesso"
    });
});

app.listen(8081, () => {
    console.log("servidor iniciado na porta 8081: http://localhost:8081")
}); 