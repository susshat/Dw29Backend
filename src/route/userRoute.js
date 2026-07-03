import { Router } from "express";
import { User } from "../schema/model.js";
import { userDelete, userGet, userGetSpecific, userPatch, userPost } from "../controller/userController.js";

const userRoute = Router()


userRoute
.route("/")
.post(userPost)
.get(userGet)

userRoute
.route("/:id")
.get(userGetSpecific)
.patch(userPatch)
.delete(userDelete)

export default userRoute;
