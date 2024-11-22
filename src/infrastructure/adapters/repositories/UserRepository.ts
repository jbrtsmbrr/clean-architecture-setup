import IUserRepositoryPort from "../../../application/ports/repositories/IUserRepository"


interface UserRawData {
  firstName: string;
  lastName: string;
  age: number;
  pass: string;
}

// MySQL
export class UserRepositoryAdapter implements IUserRepositoryPort {
  create() {
    return Promise.resolve("$re1asdfh")
  }
}

// When using other data source
export class MongoRepositoryAdapter implements IUserRepositoryPort {
  create() {
    // Mongo way of creating...
    return Promise.resolve("$re1asdfh")
  }
}