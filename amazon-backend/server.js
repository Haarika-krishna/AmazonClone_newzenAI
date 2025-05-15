import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const connection_url = 'mongodb+srv://boinihaarika:Harika2109@cluster0.btjomtk.mongodb.net/Product?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Database Connected to Atlas Product DB'))
.catch((err) => console.log(err));

app.use(express.json());
app.use(cors());


app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.get('/', (req, res) => res.status(200).send('Hello Harika here. It is Amazon clone project.'));

app.listen(port, () => console.log(`🚀 Listening on localhost:${port}`));
