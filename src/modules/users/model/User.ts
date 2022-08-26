import { v4 } from "uuid";

export class User {
  id?: string;
  created_at: Date;
  email: string;
  name: string;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
