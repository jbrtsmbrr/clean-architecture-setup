import IUserRepository from "../../interfaces/repositories/IUserRepository";

// MySQL
export class UserRepository implements IUserRepository {
  create(user: any) {
    // MySQL way of creating (INSERT INTO...)
  }
}

// When using other data source
export class MongoRepository implements IUserRepository {
  create(user: any) {
    // Mongo way of creating...
  }
}