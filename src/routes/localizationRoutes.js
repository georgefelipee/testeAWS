import  express from "express";
import LocalizationController from "../controllers/LocalizationController.js";

const router = express.Router()

router.post('/localization',LocalizationController.submitLocalization)
router.get('/localization',LocalizationController.getCords)

export default router;