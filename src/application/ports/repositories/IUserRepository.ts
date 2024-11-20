export interface CreateUserInput {
  name: string;
  lastname: string;
  password: string;
  age: number;
}

export type InsertedId = string | null;

export interface UserData {
  id: string;
  name: string;
  lastname: string;
  password: string;
  age: number;
}

interface IUserRepositoryPort {
  create(user: CreateUserInput): Promise<InsertedId>
}

export default IUserRepositoryPort;