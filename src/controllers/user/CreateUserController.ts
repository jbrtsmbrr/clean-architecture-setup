
//
// Approach #1: Simple
//
import { CreateUserOutput } from "../../adapters/output-bound";
import CreateUserUseCase from "../../application/use-cases/CreateUser";
import { UserRepository } from "../../infrastructure/database/UserRepository";
import { GoogleEmailer } from "../../infrastructure/libraries/Emailer";

export async function onCreateUserController(): Promise<CreateUserOutput> {

  const repository = new UserRepository();
  // const mongo_user_repo = new MongoRepository();
  const emailer = new GoogleEmailer();

  const createUserUseCase = new CreateUserUseCase(repository, emailer)

  const data = await createUserUseCase.execute({ age: 11, name: 'John' });

  return {
    data: data,
    errors: []
  }
}



// Approach #2: Much better approach, 
// especially if you want to test your controller in perspective of Infrastructure Layer.

import { ICreateUserUseCase } from "../../adapters/interfaces/use-cases/ICreateUserUseCase";
import { CreateUserInput } from "../../adapters/input-bounds";

export class CreateUserController {
  private readonly usecase: ICreateUserUseCase;

  constructor(usecase: ICreateUserUseCase) {
    this.usecase = usecase;
  }

  public async invoke(user_input: CreateUserInput): Promise<CreateUserOutput> {
    const data = await this.usecase.execute(user_input);

    return {
      data,
      errors: []
    }
  }
}