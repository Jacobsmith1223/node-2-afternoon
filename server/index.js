const express = require('express')
// Controller
const ctrl = require("./controllers/message_controller")



const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

const baseApi = '/api/messages';

app.post(baseApi,ctrl.create)

app.get(baseApi,ctrl.read)

app.put(`${baseApi}/:id`,ctrl.update)

app.delete(`${baseApi}/:id`,ctrl.delete)

const port = 3001;
app.listen(port, () => {
    console.log(`we are go for port ${port}`)
});


