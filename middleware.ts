import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/Cart",
]);

export default clerkMiddleware((auth, req) => {
  return auth().then((authObject) => {
    if (isProtectedRoute(req) && !authObject.userId) {
      return Response.redirect(new URL("/sign-in", req.url)); 
    }
  });
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
