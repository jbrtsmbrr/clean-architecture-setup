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

    const user = User.create({
      name: user_input.name,
      lastname: user_input.lastname,
      password: user_input.password,
      age: user_input.age,
    });

    const is_valid = user.validate();

    // if (is_valid)
    //   return false;

    const inserted_id = await this.repository.create({
      name: user.getName(),
      lastname: user.getLastName(),
      password: user.getLastName(),
      age: user.getAge()
    })

    this.emailer.send();

    return inserted_id;
  }
}

export default CreateUserUseCase;