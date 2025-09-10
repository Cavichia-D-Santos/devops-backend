import { Request, Response } from "express";
import { AlunoService } from "../services/alunoService";

export class AlunoController {
    private alunoService: AlunoService;

    constructor() {
        this.alunoService = new AlunoService();
    }

    async get(req: Request, res: Response): Promise<Response> {
        try {
            const alunos = await this.alunoService.findAll();
            return res.json(alunos);
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        const { ra, nome, email } = req.body;
        const novoAluno = await this.alunoService.create({
            ra:ra,
            nome:nome,
            email:email 
        });

        return res.status(201).json(novoAluno);
        
    }
}