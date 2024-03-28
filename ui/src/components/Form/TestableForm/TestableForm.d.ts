import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Schema } from '..';
type TestableFormProps = {
    onSubmit: SubmitHandler<Record<string, unknown>>;
};
export declare const schema: Schema<{
    fullName: unknown;
    email: unknown;
    password: unknown;
    birthYear: unknown;
    terms: unknown;
}>;
/**
 * This form exists to demonstrate how to use the useIndyForm hook
 * alongside the Form, TextInput and PasswordInput components
 *
 * It us also used for testing functionality in a form context
 * with full validation and error handling, and providing a
 * component in storybook for visual testing
 */
declare const TestableForm: React.FC<TestableFormProps>;
export default TestableForm;
