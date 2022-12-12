import * as dotenv from 'dotenv';
import express from 'express'
import auctionsRouter from "./routers/auction.js";
import cors from "cors";
import {connectDB} from "./database.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL;

app.use(cors());
app.use(express.json())
app.use('/auctions', auctionsRouter);

connectDB(MONGO_CONNECTION_URL);

app.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});

