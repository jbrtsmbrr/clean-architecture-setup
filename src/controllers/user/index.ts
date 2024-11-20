import CreateUserUseCase from "../../application/use-cases/CreateUser";
import { GoogleEmailer } from "../../infrastructure/adapters/libraries/Emailer";
import { UserRepositoryAdapter } from "../../infrastructure/adapters/repositories/UserRepository";
import { CreateUserController } from "./CreateUserController";

const emailer_adapter             = new GoogleEmailer();
const repository_adapter          = new UserRepositoryAdapter();
const createUserUseCase           = new CreateUserUseCase(repository_adapter, emailer_adapter);
const controller                  = new CreateUserController(createUserUseCase);

controller.invoke({ age: 11, name: 'John', lastname: 'Doe', password: 'password' });