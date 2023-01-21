import express from "express";
import cors from "cors";
import productsServer from "./data/productsServer.js";


const PORT = 8000;

const app = express();
app.use(express.json())
app.use(cors())

app.get('/about', async (req, res) => {
    res.send({message: 'Hello world'});
})

app.get('/', async(req, res) => {
    res.send({data: productsServer});
})


app.get('/product/:id', async(req, res) => {
    console.log('id', req.params.id);
    try {
        const getProductDetail = productsServer.filter((product) => product.id === Number(req.params.id));
        res.send({data: getProductDetail});
    } 
    catch(err) {
        console.log('err', err);
    }
})


app.listen(PORT, () => {
    console.log(`Server lisiting on port ${PORT}`);
})