interface InitialUserParams {
  id?: string;
  name: string;
  lastname: string
  password?: string;
  age: number;
}

class User {
  private name: string;
  private age: number;

  private constructor(name: string, age: number) {
    this.age = age;
    this.name = name
  }

  public static create({ name, age }: { name: string, age: number }) {

    return new User(name, age);
  }

  public validate() {
    // Let say we don't allow user under 18
    if (this.age < 18)
      return false;

    if (this.name.length <= 1)
      return false;

    return true;
  }
}


export default User