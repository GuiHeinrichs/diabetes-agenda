import express from "express";
import cors from "cors";
import actionRoutes from "./routes/actionRoutes.js"

const port = 3300;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", actionRoutes);

app.listen(port, () => {console.log(`✅ Server UP! Rodando na porta ${port}.`)});