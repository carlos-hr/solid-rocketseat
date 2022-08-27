import { v4 } from "uuid";

export class User {
  id?: string;
  name: string;
  admin?: boolean;
  email: string;
  created_at: Date;
  updated_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }

    if (!this.admin) {
      this.admin = false;
    }
  }
}
