import { CreateUserInput } from "../../input-bounds";
import { UserOutput } from "../../output-bound";


export interface ICreateUserUseCase {
  execute(input: CreateUserInput): Promise<UserOutput>;
}