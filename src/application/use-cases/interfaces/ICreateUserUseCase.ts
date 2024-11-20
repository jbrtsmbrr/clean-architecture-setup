import { UserOutput } from "../../../infrastructure/adapters/output-bound";
import { CreateUserInput } from "../../ports/repositories/IUserRepository";

export interface ICreateUserUseCase {
  execute(input: CreateUserInput): Promise<UserOutput>;
}