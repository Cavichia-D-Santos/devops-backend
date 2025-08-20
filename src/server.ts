import express from "express";
import alunoRouter from "./routes/alunoRoutes";

const app = express();
app.use(express.json());

app.use("/aluno", alunoRouter)

const port = 3000;
app.listen(port, () => {
    console.log("Servidor de API rodando")
})