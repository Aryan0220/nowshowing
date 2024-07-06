import Link from "next/link";
import {Button} from "@/components/ui/button"; 
import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export const Actions = () => {
    return (
        <div className="flex items-center justify-end gap-x-4">
            <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground"
            asChild
            >
                <Link className="flex gap-x-2" href="/">
                    <LogOut />
                    Exit
                </Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};  