import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'sextaFeiraPlaytv';

export interface AuthRequest extends Request {
    id?: number;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token){
        return res.status(401).json({ response:'Token não autorizado' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        next()
    } catch(error){
        return res.status(400).json({ erro: error });
    }
}