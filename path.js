import { Router } from "express";
import * as fnc from "./req_function.js"

const router = Router()

router.route("/api").post(fnc.get_data)
router.route("/api").get(fnc.send_data)
router.route("/api").delete(fnc.delet_data)
router.route("/api").put(fnc.edit_data)

export default router;