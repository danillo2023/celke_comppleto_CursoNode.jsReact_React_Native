const express = require("express");
const User = require('./models/User');
const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {

    await User.findAll({
        attributes: ['id', 'name', 'email'], order: [['id', 'DESC']]
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
    const { name, email } = req.body;
    await User.create(req.body)
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


app.delete("/user/:id", async (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    await User.destroy({where:{id}})
    .then(() =>{
        return res.json({
           
            menssagem: "Usuário apagado com sucesso"
       });

    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            menssagem: "Erro: usuário não apagado com sucesso"
       });
    });

    })


app.listen(8081, () => {
    console.log("servidor iniciado na porta 8081: http://localhost:8081")
}); 