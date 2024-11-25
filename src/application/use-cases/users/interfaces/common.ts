export interface UserId extends String {}

export interface UseCaseError { message: string; };

export interface UseCaseResult<T> { result: T; errors: UseCaseError[]; };