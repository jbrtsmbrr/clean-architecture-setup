import CreateUserUseCase from "../../application/use-cases/CreateUser";
import { UserRepository } from "../../infrastructure/database/UserRepository";
import { GoogleEmailer } from "../../infrastructure/libraries/Emailer";
import { CreateUserController } from "./CreateUserController";

const emailer             = new GoogleEmailer();
const repository          = new UserRepository();
const createUserUseCase   = new CreateUserUseCase(repository, emailer);
const controller          = new CreateUserController(createUserUseCase);

controller.invoke({ age: 11, name: 'John' });