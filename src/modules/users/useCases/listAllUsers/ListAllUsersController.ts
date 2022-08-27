import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers.user_id as string;
    const listUsers = this.listAllUsersUseCase.execute({ user_id });

    return response.json(listUsers);
  }
}

export { ListAllUsersController };
