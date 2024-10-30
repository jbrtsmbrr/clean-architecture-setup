export interface UserOutput {
  id: number;
  name: string;
  age: number;
}

export interface CreateUserOutput {
  errors: string[];
  data: UserOutput;
}