import express from 'express';
import { login, register } from './controllers/logging.js';
import { submitSurvey, getSurveyFromUser } from './controllers/survey.js';
import verifyToken from './middleware/auth.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/submit', verifyToken, submitSurvey);
router.get('/:userId', verifyToken, getSurveyFromUser);

export default router;