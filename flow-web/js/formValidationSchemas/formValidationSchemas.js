import { Schema } from '@indy/ui/Form';

import {
  ID_COMPLETE_PROFILE_BIRTH_YEAR,
  ID_COMPLETE_PROFILE_FIRST_NAME,
  ID_STANDALONE_LOGIN_EMAIL,
  ID_STANDALONE_LOGIN_PASSWORD,
} from '@app/constants/ids';

import {
  anonymousPasswordValidation,
  birthYearValidation,
  emailValidation,
  firstNameValidation,
  passwordValidation,
} from './fieldValidationSchemas';

export const loginFormSchema = new Schema({
  [ID_STANDALONE_LOGIN_EMAIL]: emailValidation,
  [ID_STANDALONE_LOGIN_PASSWORD]: passwordValidation,
});

export const registrationLoginFormSchema = new Schema({
  [ID_STANDALONE_LOGIN_EMAIL]: emailValidation,
  [ID_STANDALONE_LOGIN_PASSWORD]: anonymousPasswordValidation,
});

export const completeYourProfileSchema = new Schema({
  [ID_COMPLETE_PROFILE_FIRST_NAME]: firstNameValidation,
  [ID_COMPLETE_PROFILE_BIRTH_YEAR]: birthYearValidation,
});
