import { v4 } from "uuid";

export class User {
  id?: string;
  created_at: Date;
  email: string;
  name: string;
  admin: boolean;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
