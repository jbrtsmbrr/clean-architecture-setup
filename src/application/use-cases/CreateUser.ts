import User from "../../domain/entities/User";
import { UserOutput } from "../../infrastructure/adapters/output-bound";
import { IEmailerPort } from "../ports/libraries/IEmailer";
import IUserRepositoryPort, { CreateUserInput } from "../ports/repositories/IUserRepository";
import { ICreateUserUseCase } from "./interfaces/ICreateUserUseCase";


class CreateUserUseCase implements ICreateUserUseCase {
  private readonly repository: IUserRepositoryPort;
  private readonly emailer: IEmailerPort;
  // private user: User;

  constructor(repository: IUserRepositoryPort, emailer: IEmailerPort) {
    this.repository = repository;
    this.emailer = emailer;
  }

  public async execute(user_input: CreateUserInput): Promise<UserOutput> {

    const user = User.create({ name: user_input.name, age: user_input.age })
    const is_valid = user.validate();

    // if (is_valid)
    //   return false;

    this.repository.create({
      name: 'John',
      lastname: 'Doe',
      password: 'password',
      age: 21
    })
    
    this.emailer.send();

    return {
      id: 1_000_001,
      name: user_input.name,
      age: user_input.age
    };
  }
}

export default CreateUserUseCase;