import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UsuarioRepository } from '../repositories/usuarioRepository';
import { UsuarioAttributes } from '../models/usuario';

const JWT_SECRET = process.env.JWT_SECRET || 'PenaltiFoiPix';

export class AuthService {
  private usuarioRepository: UsuarioRepository;

  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }

  async register(userData: Omit<UsuarioAttributes, 'id'>) {
    const existingUser = await this.usuarioRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('Email já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(userData.senha, 10);
    const usuario = await this.usuarioRepository.create({
      ...userData,
      senha: hashedPassword
    });

    return { message: 'Usuário criado com sucesso' };
  }

  async login(email: string, senha: string) {
    const usuario = await this.usuarioRepository.findByEmail(email);
    if (!usuario) {
      throw new Error('Credenciais inválidas');
    }

    const isValidPassword = await bcrypt.compare(senha, usuario.senha);
    if (!isValidPassword) {
      throw new Error('Acesso não autorizado');
    }

    const token = jwt.sign(
      { usuarioId: usuario.id, usuarioName: usuario.nome },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return { token };
  }
}