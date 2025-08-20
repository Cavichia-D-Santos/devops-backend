import {Router} from "express";
import {AlunoController} from "../controllers/AlunoController";

const alunoRouter = Router();
const aluno = new AlunoController();

alunoRouter.get("/", (req, res) => aluno.get(req, res));
alunoRouter.post("/", (req, res) => aluno.create(req, res));
alunoRouter.put("/:ra", (req, res) => aluno.update(req, res));
export default alunoRouter;