"use client";

import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { onFollow } from "@/actions/follow";
import { toast } from "sonner";

interface ActionProps{
    userId: string;
    isFollowing: boolean;
}

export const Actions = ({
    isFollowing,
    userId,
}: ActionProps) => {
    const [isPending, startTransition] = useTransition();
    
    const onClick = () => {
        startTransition(() => {
            onFollow(userId)
            .then((data) => toast.success(`You are now Following ${data.following.username}`))
            .catch(() => toast.error("Something Went Wrong"));
        });
    };

    return(
        <Button disabled={isFollowing || isPending} onClick={onClick} variant="primary" className="text-white">
            Follow
        </Button>
    )
}