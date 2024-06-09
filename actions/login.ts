'use server'
import * as z from 'zod'
import { LoginSchema } from '@/schemas';

export const login = async (values: z.infer<typeof LoginSchema>) =>{
    const validateFields = LoginSchema.safeParse(values)
    if(!validateFields.success) return {error: 'Invalid filds!'}
    return {success: 'Email sent!'}
    console.log('LOGIN', values);
    //return 'LOGIN'
}