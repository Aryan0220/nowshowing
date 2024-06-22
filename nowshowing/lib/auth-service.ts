import { currentUser } from "@clerk/nextjs/server"; 
import { db } from "@/lib/db";

export const getSelf = async () => {
    console.log("in getSelf");
    const self = await currentUser();
    console.log("in getSelf after currentUser");
    if(!self || !self.username){
        throw new Error("Unauthorized");
    }
    console.log("in 1");
    const user = await db.user.findUnique({
        where: { externalUserId: self.id },
    });
    console.log(self.id);
    console.log(user);
    if(!user){
        console.log("error ?");
        throw new Error("Not Found");
    }
    console.log("return done");
    return user;
}