import express from "express";
const router = express.Router();
import {
  signUp,
  signIn
} from '../controllers/auth.controller';

import {
  signUpValidationRules,
  signUpValidationErrors
}from '../validators/signUp.validator';
 
router.post('/auth/signup',signUpValidationRules, signUpValidationErrors, signUp);
router.post('/auth/signin',signUpValidationRules, signUpValidationErrors, signIn);

export default router;