import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const isProtectedRoute = createRouteMatcher(["/(.)"]);
const isPublicRoute = createRouteMatcher([
  "/",
  "/api/webhooks(.*)",
  "/api/uploadthing",
  "/:username",
  "/search",
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return;
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!...|_next).)", "/", "/(api|trpc)(.*)", "/(.*)"],
};
