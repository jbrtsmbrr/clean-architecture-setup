
//
// Approach #1: Simple
//

import { CreateUserInput } from "../../application/ports/repositories/IUserRepository";
import CreateUserUseCase from "../../application/use-cases/CreateUser";
import { ICreateUserUseCase } from "../../application/use-cases/interfaces/ICreateUserUseCase";
import { GoogleEmailer } from "../../infrastructure/adapters/libraries/Emailer";
import { CreateUserOutput } from "../../infrastructure/adapters/output-bound";
import { UserRepositoryAdapter } from "../../infrastructure/adapters/repositories/UserRepository";


export async function onCreateUserController(): Promise<CreateUserOutput> {

  const repository = new UserRepositoryAdapter();
  // const mongo_user_repo = new MongoRepository();
  const emailer = new GoogleEmailer();

  const createUserUseCase = new CreateUserUseCase(repository, emailer)

  const data = await createUserUseCase.execute({ age: 11, name: 'John', lastname: 'Doe', password: 'password' });

  return {
    data: data,
    errors: []
  }
}



// Approach #2: Much better approach, 
// especially if you want to test your controller in pe

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