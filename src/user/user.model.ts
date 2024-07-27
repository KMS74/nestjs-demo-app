// Models represent a specific type of data that your application will work with.
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt?: number;
}
