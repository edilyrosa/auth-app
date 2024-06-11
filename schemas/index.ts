//!This schema describes how must be every data and its kind of.
//create one Obj (by form or data table), every attrb will be the field-form and field-table to validated

import * as z from 'zod';

export const LoginSchema = z.object({
    email:z.string({
        invalid_type_error: 'Must be a string'
    }).email({
        message:'Email is require'
    }),
    password: z.string().min(1, {
        message: 'Password is querired'
    })
})
export const RegisterSchema = z.object({
    email:z.string({
        invalid_type_error: 'Must be a string'
    }).email({
        message:'Email is require'
    }),
    password: z.string().min(6, {
        message: 'Minimum 6 characters querired'
    }),
    name: z.string().min(1, {
        message: 'Name is querired'
    })
})