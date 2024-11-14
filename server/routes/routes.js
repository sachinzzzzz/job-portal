import express from 'express';
import { saveJobData, getJobData } from '../controller/job-controller.js';
import { signupUser } from '../controller/user-controller.js';
import { loginUser } from '../controller/user-controller.js';

const router = express.Router();


router.post('/save', saveJobData);
router.get('/get', getJobData);
router.post("/signup", signupUser);
router.post("/login", loginUser)

export default router;