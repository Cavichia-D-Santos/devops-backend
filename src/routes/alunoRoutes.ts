import { Router } from "express";
import {alunoController} from "../controllers/alunoController";

const router = Router();
const aluno = new alunoController();

router.get("/", (req, res) => aluno.get(req, res));
router.post("/", (req, res) => aluno.create(req, res));
router.put("/:ra", (req, res) => aluno.update(req, res));

export default router;