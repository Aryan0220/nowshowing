import Link from "next/link"; 
import { Button } from "@/components/ui/button";

const NotFoundPage = ()=>{
    return (
        <div className="h-full flex flex-col space-y-4 items-centerjustify-center text-muted-foreground">
            <h1 className="text-4xl">404</h1>
            <p>
                We couldn&apos;t find the page you are lookign for.
            </p>
            <Button variant="secondary" asChild>
                <Link href="/">
                Go back home
                </Link>
            </Button>
        </div>
    );
};

export default NotFoundPage; 