import User from "../../../domain/entities/User";
import { IEmailerPort } from "../../../interfaces/libraries/IEmailer";
import IUserRepositoryPort from "../../../interfaces/repositories/IUserRepository";
import { UserId } from "./interfaces/common";
import { ICreateUserUseCase } from "./interfaces/ICreateUserUseCase";
import { CreateUserInput } from "./interfaces/input";


class CreateUserUseCase implements ICreateUserUseCase {
  private readonly repository: IUserRepositoryPort;
  private readonly emailer: IEmailerPort;
  // private user: User;

  constructor(repository: IUserRepositoryPort, emailer: IEmailerPort) {
    this.repository = repository;
    this.emailer = emailer;
  }

  public async execute(user_input: CreateUserInput): Promise<UserId> {

    const user = User.create({ name: user_input.name, age: user_input.age })
    const is_valid = user.validate();

    // if (is_valid)
    //   return false;

    const inserted_id = await this.repository.create({
      name: 'John',
      lastname: 'Doe',
      password: 'password',
      age: 21
    })
    
    this.emailer.send();

    return inserted_id;
  }
}

export default CreateUserUseCase;