import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import router from "./routes/alunoRoutes";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/aluno", router);

const port = 3000;
app.listen(port, () =>{ //Roda uma função quando o app está ouvindo
    console.log("Servidor rodando");
});