import { Router } from "express";
import userRoute from "./userRoute.js";
import { schoolDelete, schoolGet, schoolGetSpecific, schoolPatch, schoolPost } from "../controller/schoolController.js";

const schoolRoute = Router()


schoolRoute
.route("/")
.post(schoolPost)
.get(schoolGet)


schoolRoute
.route("/:id")
.get(schoolGetSpecific)
.patch(schoolPatch)
.delete(schoolDelete)

export default schoolRoute;