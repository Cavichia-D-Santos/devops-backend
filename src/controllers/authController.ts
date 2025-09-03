import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'sextaFeiraPlaytv';

interface LoginUser {
    id: number;
    email: string;
    password: string;
    nome: string;
}

export class AuthController {
    private users: LoginUser[] = []

    async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const user = this.users.find(u => u.email === email); //conferir se o email existe

        if (!user) {
            return res.status(400).json({ message:'Credenciais inválidas.'});
        }
        const isValidPassword = await bcrypt.compare(password, user.password); //compara a senha fornecida com a senha salva do user
        if (!isValidPassword){
            return res.status(401).json({ message:'Acesso não autorizado.'});
        }
        
        const token = jwt.sign({ userName: user.nome }, JWT_SECRET, { expiresIn: '24h' });

        return res.json({ token: token});
    }

    async register(req: Request, res: Response): Promise<Response> {
        const { nome, email, password } = req.body;

        //Desafio: Validar se todas as informações foram enviadas; Se não, voltar 400 com msg.

        const existingUser = this.users.find(u => u.email === email);
        if (!existingUser){
            return res.status(400).json({ message:'Email já existente.'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: LoginUser = {
            id: this.users.length + 1,
            nome,
            email,
            password: hashedPassword
        }

        this.users.push(newUser);
        return res.status(201).json({ message:'Usuário criado com sucesso' });
    }
}