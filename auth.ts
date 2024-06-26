
import NextAuth from "next-auth"
import {PrismaAdapter } from '@auth/prisma-adapter'
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserId} from "@/data/user"
import { UserRole } from "@prisma/client"


export const {
    handlers:{GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    pages:{
        signIn:'/auth/login',
        error:'auth/error'
    },
    events:{
        async linkAccount({user}){
            await db.user.update({
                where:{id:user.id},
                data:{emailVerified:new Date()}
            })
        }
    },
    callbacks: {

        //    async signIn({user}){
        //     const existingUser = await getUserId(user.id as string)
        //     if(!existingUser || !existingUser.emailVerified) return false;
        //     if(!user) return false;
            
        //     return true;
        // },
        async session({token, session}){
            if(token.sub && session.user) session.user.id = token.sub;
            if(token.role && session.user) session.user.role = token.role as UserRole;
            
            return session
        },
        async jwt({token}){
            if(!token.sub) return token
            const existingUser = await getUserId(token.sub)
            if(!existingUser) return token 
            token.role = existingUser.role;


            return token
        }
    },
    adapter: PrismaAdapter(db),
    session:{strategy:'jwt'},
    ...authConfig
})