import IUserRepositoryPort from "../../../application/ports/repositories/IUserRepository"


interface UserRawData {
  firstName: string;
  lastName: string;
  age: number;
  pass: string;
}

// MySQL
export class UserRepositoryAdapter implements IUserRepositoryPort {
  create(input: CreateUserInput) {
    const db_data: UserRawData = {
      firstName: input.name,
      lastName: input.lastname,
      age: input.age,
      pass: input.password
    }

    // Insert using `db_data` variable
    // mysql.query(`insert into ?...`, [db_data])
    
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