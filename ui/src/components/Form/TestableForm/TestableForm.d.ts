import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Schema } from '..';
type ExampleFormData = {
    fullName: string;
    email: string;
    password: string;
    birthYear: string;
};
type TestableFormProps = {
    onSubmit: SubmitHandler<ExampleFormData>;
};
export declare const schema: Schema<ExampleFormData>;
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
