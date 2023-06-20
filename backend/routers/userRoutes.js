import {createUser, getAllUsers,getOneUser,updateUser,deleteUser } from "../controllers/userController.js";

const userRoutes = (app) => {
  app.route("/users")
  .get(getAllUsers)
  .post(createUser);

  app.route("/login")
  .post();

  app.route("/register")
  .post();

  
    app.route("/users/:user_id")
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);
};
export default userRoutes;