export interface IWrite<T> {
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T>;
  delete(id: string): Promise<boolean>;
}

export interface IRead<T> {
  find(item: any): Promise<T[]>;
  findById(id: string): Promise<T>;
}
