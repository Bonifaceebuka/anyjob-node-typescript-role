import express from "express";
import {
    signUp,
    signIn
} from '../controllers/auth.controller';
import {
    newSavingsGroup
} from '../controllers/savings.controller';
import auth from "../middlewares/apiAuth.middleware";
import {
    signUpValidationRules,
    signUpValidationErrors
}from '../validators/signUp.validator';

import {
    savingsGroupValidationRules,
    savingsGroupValidationErrors
}from '../validators/savingsGroup.validator';

const router = express.Router();
router.post('/auth/signup',signUpValidationRules, signUpValidationErrors, signUp);
router.post('/auth/signin',signUpValidationRules, signUpValidationErrors, signIn);

router.post('/savings/create_group', auth, savingsGroupValidationRules, savingsGroupValidationErrors,  newSavingsGroup);


export default router;