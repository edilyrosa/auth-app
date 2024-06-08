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