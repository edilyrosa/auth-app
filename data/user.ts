import { db } from "@/lib/db"

export const getUserEmail =  async (email:string) =>{
    try {
        const user = await db.user.findUnique({where:{email}})
        return user
    } catch {
        return null
    }
}
export const getUserId =  async (id:string) =>{
    try {
        const user = await db.user.findUnique({where:{id}})
    } catch (err) {
        return null
    }
}