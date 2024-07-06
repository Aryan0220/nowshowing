import { Livebadge } from "@/components/live-badge";
import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { User } from "@prisma/client"
import Link from "next/link";

interface ResultCardProps{
    data: {
        id: string;
        isLive: boolean;
        name: string;
        thumbnailUrl: string | null;
        updatedAt: Date;
        user: User;
    };
};

export const ResultCard = ({
    data,
}: ResultCardProps) => {
    return (
        <Link href={`/${data.user.username}`}>
            <div className="h-full w-full space-y-4">
                <Thumbnail 
                    src={data.thumbnailUrl}
                    fallback={data.user.imageUrl}
                    isLive={data.isLive}
                    username={data.user.username}
                />
                {data.isLive && (
                    <div className="absolute top-2 left-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <Livebadge />
                    </div>
                )}
                <div className="flex gap-x-3">
                    <UserAvatar 
                        username={data.user.username}
                        imageUrl={data.user.imageUrl}
                        isLive={data.isLive}
                    />
                    <div className="flex flex-col text-sm overflow-hidden">
                        <p className="truncate font-semiblod hover:text-blue-500">
                            {data.name}
                        </p>
                        <p className="text-[12px] text-zinc-500">
                            {data.user.username}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export const ResultCardSkeleton = () => {
    return (
        <div className="h-full w-full space-y-4">
            <ThumbnailSkeleton />
            <div className="flex gap-x-3">
                <UserAvatarSkeleton />
                <div className="flex flex-col gap-y-1">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                </div>
            </div>
        </div>
    )
}