import IUserRepositoryPort from "../../ports/repositories/IUserRepository";
import { UserId } from "../../ports/use-cases/users/common";
import { IGetUserUseCase } from "../../ports/use-cases/users/IGetUserUseCase";
import { UserOutput } from "../../ports/use-cases/users/output";

export class GetUserUseCase implements IGetUserUseCase {
  constructor(private readonly repository: IUserRepositoryPort) {}

  public async execute(id: UserId): Promise<UserOutput | null> {
      const user = await this.repository.retrieve(id)
      return user;
  }
}