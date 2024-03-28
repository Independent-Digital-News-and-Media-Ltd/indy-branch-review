import React, { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Schema } from '..';
import { FormInputProps } from '../Input/Input.types';
type FormData = Record<string, unknown>;
type InputProps = Pick<FormInputProps<HTMLInputElement>, 'id' | 'state'>;
type TestableFormWrapper = {
    onSubmit: SubmitHandler<FormData>;
    schema: Schema<FormData>;
    children: (args: {
        registerControlledInput: (name: string) => InputProps;
    }) => ReactNode;
};
/**
 * This wrapper exists to make testing easier by setting up a simple form
 * and accepting input elements as children to be tested.
 *
 * This should not be used in production, but may be helpful reference
 *
 */
declare const TestableFormWrapper: React.FC<TestableFormWrapper>;
export default TestableFormWrapper;
