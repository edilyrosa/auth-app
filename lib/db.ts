//PrismaClient wont be create in every reload on Dev env.
//!On Dev env:
//app is reload due to changes in code. So
// recompile the files and rerun the modules
//could exhaust the connections to the DB.
//!On Dev production:
//There isnt this problem, cause code doesnt reload automatically.
import { PrismaClient } from "@prisma/client";
declare global {
    var prisma: PrismaClient | undefined;
    }
    
//globalThis isnt affected by hot reload
//globalThis remain the instance. 
export const db = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== "production") globalThis.prisma = db;
//In environment Dev, the follows reload (for hot reload), wont be
//create a new instance of "PrismaClient".