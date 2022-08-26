import { app } from ".";
import { usersRoutes } from "./routes/users.routes";

app.use("/user", usersRoutes);

app.listen(3333, () => console.log("Server is running!"));
