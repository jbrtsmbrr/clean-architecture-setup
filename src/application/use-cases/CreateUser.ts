import { CreateUserInput } from "../../adapters/input-bounds";
import { ICreateUserUseCase } from "../../adapters/interfaces/use-cases/ICreateUserUseCase";
import { UserOutput } from "../../adapters/output-bound";
import { IEmailer } from "../../controllers/interfaces/libraries/IEmailer";
import User from "../../domain/entities/User";
import IUserRepository from "../../interfaces/repositories/IUserRepository";

class CreateUserUseCase implements ICreateUserUseCase {
  private readonly repository: IUserRepository;
  private readonly emailer: IEmailer;
  // private user: User;

  constructor(repository: IUserRepository, emailer: IEmailer) {
    this.repository = repository;
    this.emailer = emailer;
  }

  public async execute(user_input: CreateUserInput): Promise<UserOutput> {

    const user = User.create({ name: user_input.name, age: user_input.age })
    const is_valid = user.validate();

    // if (is_valid)
    //   return false;

    this.repository.create(user)
    this.emailer.send();

    return {
      id: 1_000_001,
      name: user_input.name,
      age: user_input.age
    };
  }
}

export default CreateUserUseCase;