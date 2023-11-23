import express from 'express'
import connectMongoAtlas from './src/config/dbConnect.js'
import routes from './src/routes/routes.js';

const app = express();
routes(app)
const port = 3000;

app.use(express.urlencoded({extended:true}))
app.listen(port,() => {
    console.log('Servidor On');
})

const conexao = await connectMongoAtlas();

conexao.on("error",(erro)=> {
    console.error('erro de conexao',erro);
})
conexao.once("open", ()=> {
    console.log('Conexao estabelecida com o banco');
})