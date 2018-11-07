const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//permite que clientes acessem os recursos da aplicação


const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
//extraindo servidor e preparando a escuta de eventos com socket.io

mongoose.connect('mongodb://app123:app123@ds155213.mlab.com:55213/appbackend', {
    useNewUrlParser: true
});


app.use((req, res, next) => {
    req.io = io;
    return next();
});
//habitando a escuta de eventos

app.use(cors());
app.use(express.json());
//resposta retorna no formato json
app.use(require('./routers'));

//habilitando o frontend para acessar o ws e http
server.listen(3000, () => {
    console.log('Server started on port 3000, ready');
});

