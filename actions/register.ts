'use server'
//!IS A SERVER COMP BECAUSE WILL RECEIVE DATA FROM FORM TO SEND IT TO BD

import bcrypt from 'bcrypt'
import * as z from 'zod'
import { RegisterSchema } from '@/schemas';
import { db } from '@/lib/db';
import {getUserEmail } from '@/data/user'

export const register = async (values: z.infer<typeof RegisterSchema>) =>{
    const validateFields = RegisterSchema.safeParse(values)
    if(!validateFields.success) return {error: 'Invalid filds!'}
   
    const {email, password, name} = validateFields.data
   
    //10 is the cost factor o salt rounds. 
    // 2^10 (1024) is the run times of the hash algothim
    const hashedPassword = await bcrypt.hash(password, 10) 

    //consult "email" hasnt been taken.
    const existingUser = await getUserEmail(email)
    if(existingUser) return {error: 'Email already in use'}

    //!All good, create de user!, catch up with hash the password.
    await db.user.create({
        data:{ name, email, password:  hashedPassword}})

    //TODO: Send verification token email, user must make authentication by email.
    return {success: 'User creaed!'}
}