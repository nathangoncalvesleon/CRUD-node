const express = require('express');
const fs = require('fs');

const { randomUUID } = require('crypto');


const app = express();

app.use(express.json());

let users = [];


app.get('/cadastros', (req, res) => {

  return res.json(users);
    
})

app.post("/cadastrar", (request, response) => {
    
    const { nome, data, valor } = request.body;

    const user = {
        id: randomUUID(),
        nome,
        data,
        valor
    }
    users.push(user);
    
    
    return response.json(user);
});

app.get('/cadastros/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === id);
    return res.json(user);
})

app.put('/cadastros/:id', (req, res) => {

    const { id } = req.params;
    const { nome, data, valor } = req.body;

    const userIndex = users.findIndex(user => user.id === id);
    users[userIndex]= {
        ...users[userIndex],
        nome,
        data,
        valor
    
    }

    return res.json('Atualizado com sucesso');
        




})
app.delete('/cadastros/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === id);
    users.splice(userIndex, 1);
    return res.json('Deletado com sucesso');


})


app.listen(4002, () => console.log("Server running on port 4002"));

