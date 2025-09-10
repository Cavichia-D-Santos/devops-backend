import { Aluno, AlunoAttributes } from '../models/aluno';

export class AlunoRepository {
  async findAll(): Promise<Aluno[]> {
    return await Aluno.findAll();
  }

  async findByRa(ra: string): Promise<Aluno | null> {
    return await Aluno.findOne({ where: { ra } });
  }

  async create(alunoData: Omit<AlunoAttributes, 'id'>): Promise<Aluno> {
    return await Aluno.create(alunoData);
  }

  async update(ra: string, alunoData: Partial<AlunoAttributes>): Promise<Aluno | null> {
    const aluno = await this.findByRa(ra);
    if (!aluno) return null;
    
    await aluno.update(alunoData);
    return aluno;
  }

  async delete(ra: string): Promise<boolean> {
    const result = await Aluno.destroy({ where: { ra } });
    return result > 0;
  }
}