import express, { response, request } from 'express';
const app = express();

app.use(express.json())

const users = [
    'Henrique',
    'Felipe',
    'José',
]

app.get('/users',(request,response)=>{
    const search = String(request.query.search)

    const filterdUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filterdUsers)
});

app.get('/users/:id',(request,response)=>{
    const id = Number( request.params.id);
    const user = users[id];
    return response.json(user)
})

app.post('/users',(request,response)=>{
    const data =  request.body
    const user = {
        name: data.name,
        email: data.email
    }
    return response.json(user)
})

app.listen(3333)