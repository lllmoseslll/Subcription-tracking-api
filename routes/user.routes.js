import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.json({ message: "create new user" });
});

userRouter.put("/:id", (req, res) => {
  res.json({ message: "edit a user" });
});

userRouter.delete("/:id", (req, res) => {
  res.json({ message: "delete a user" });
});

export default userRouter;
