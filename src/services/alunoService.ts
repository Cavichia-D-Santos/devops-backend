import { AlunoRepository } from '../repositories/alunoRepository';
import { AlunoAttributes } from '../models/aluno';

export class AlunoService {
  private alunoRepository: AlunoRepository;

  constructor() {
    this.alunoRepository = new AlunoRepository();
  }

  async findAll() {
    return await this.alunoRepository.findAll();
  }

  async create(alunoData: Omit<AlunoAttributes, 'id'>) {
    const existingAluno = await this.alunoRepository.findByRa(alunoData.ra);
    if (existingAluno) {
      throw new Error('RA já existe');
    }
    return await this.alunoRepository.create(alunoData);
  }

  async update(ra: string, alunoData: Partial<AlunoAttributes>) {
    const aluno = await this.alunoRepository.update(ra, alunoData);
    if (!aluno) {
      throw new Error('Aluno não encontrado');
    }
    return aluno;
  }

  async delete(ra: string) {
    const deleted = await this.alunoRepository.delete(ra);
    if (!deleted) {
      throw new Error('Aluno não encontrado');
    }
    return { message: 'Aluno removido com sucesso' };
  }
}