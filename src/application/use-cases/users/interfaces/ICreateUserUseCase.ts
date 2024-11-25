import { UseCaseResult, UserId } from "./common";
import { CreateUserInput } from "./input";

export interface ICreateUserUseCase {
  execute(input: CreateUserInput): Promise<UseCaseResult<UserId | null>>;
}