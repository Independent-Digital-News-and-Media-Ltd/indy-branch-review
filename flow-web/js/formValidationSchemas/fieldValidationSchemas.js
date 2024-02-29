import { Schema } from '@indy/ui/Form';

import { getMostRecentAndEarliestYearForRegistration } from '@app/component/library/helper';

import {
  VALIDATION_SCHEMA_BIRTH_YEAR,
  VALIDATION_SCHEMA_EMAIL,
  VALIDATION_SCHEMA_FIRST_NAME,
  VALIDATION_SCHEMA_PASSWORD,
} from './formValidationSchemas.constants';

const { earliestYear, mostRecentYear } =
  getMostRecentAndEarliestYearForRegistration();

export const emailValidation = Schema.add(VALIDATION_SCHEMA_EMAIL)
  .string()
  .isEmail()
  .required();

export const passwordValidation = Schema.add(VALIDATION_SCHEMA_PASSWORD)
  .string()
  .required();

export const firstNameValidation = Schema.add(VALIDATION_SCHEMA_FIRST_NAME)
  .string()
  .required()
  .hasMin(1, 'letters')
  .hasMax(40, 'letters');

export const birthYearValidation = Schema.add(VALIDATION_SCHEMA_BIRTH_YEAR)
  .number()
  .required()
  .hasRange(earliestYear, mostRecentYear, 'Digits');
