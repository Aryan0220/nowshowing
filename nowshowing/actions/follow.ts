"use server";

import { revalidatePath } from "next/cache";
import { followUser, unfollowUser } from "@/lib/follow-service";

export const onFollow = async (id: string) => {
    try{
        console.log("in try");
        const followedUser = await followUser(id);
        console.log("FollowUser Loaded Succussfully");
        revalidatePath("/");
        console.log("Revalidating Path Complete");
        if(followedUser){
            console.log("in if");
            revalidatePath(`/${followedUser.following.username}`);
            console.log(`Revalidated path to /${followedUser.following.username}`);
        }
        console.log("Completed Function successfully");
        return followedUser;
    }
    catch(error){
        throw new Error("Internal Error");
    }
}

export const onUnfollow = async (id: string) => {
    try{
        const unfollowedUser = await unfollowUser(id);

        revalidatePath("/");
        if(unfollowedUser){
            revalidatePath(`/${unfollowedUser.following.username}`);
        }
        return unfollowedUser;
    }
    catch(error){
        throw new Error("Internal Error");
    }
}