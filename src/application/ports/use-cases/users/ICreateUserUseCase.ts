import { UserId } from "./common";
import { UseCaseResult } from "../common";
import { CreateUserInput } from "./input";

export interface ICreateUserUseCase {
  execute(input: CreateUserInput): Promise<UseCaseResult<UserId | null>>;
}