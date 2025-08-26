import express from "express";
import router from "./routes/alunoRoutes";

const app = express();

app.use(express.json())

app.use("/aluno", router)

const port = 3000;
app.listen(port, () =>{ //Roda uma função quando o app está ouvindo
    console.log("Servidor rodando");
})