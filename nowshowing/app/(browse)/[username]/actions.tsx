"use client";

import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { onFollow, onUnfollow } from "@/actions/follow";
import { toast } from "sonner";
import { onBlock , onUnblock } from "@/actions/block";

interface ActionProps{
    userId: string;
    isFollowing: boolean;
}

export const Actions = ({
    isFollowing,
    userId,
}: ActionProps) => {
    const [isPending, startTransition] = useTransition();
    
    const handleFollow = () => {
        startTransition(() => {
            onFollow(userId)
            .then((data) => toast.success(`You are now Following ${data.following.username}`))
            .catch(() => toast.error("Something Went Wrong"));
        });
    };

    const handleUnfollow = () => {
        startTransition(() => {
            onUnfollow(userId)
            .then((data) => toast.success(`You have Unfollowed ${data.following.username}`))
            .catch(() => toast.error("Something Went Wrong"));
        });
    };

    const onClick = () => {
        if(isFollowing){
            handleUnfollow();
        }
        else{
            handleFollow();
        }
    }

    const handleBlock = () => {
        startTransition(() =>{
            onUnblock(userId)
                .then((data) => toast.success(`Unblocked the user ${data.blocked.username}`))
                .catch(() => toast.error("Something went wrong"));
        });
    };

    return(
        <>
        <Button 
            disabled={isPending} 
            onClick={onClick} 
            variant="primary" 
            style={{ color: "white" }}
        >
            {isFollowing ? "Unfollow" : "Follow"}
        </Button>
        <Button 
            onClick={handleBlock} 
            disabled={isPending}
            style={{ backgroundColor: "white", color: "black" }}
        >
            Block
        </Button>
        </>
    )
}