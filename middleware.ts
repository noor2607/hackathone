import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes (case-sensitive)
const isProtectedRoute = createRouteMatcher(["/Cart"]);

export default clerkMiddleware(async (auth, req) => {
  console.log("Middleware executed for:", req.nextUrl.pathname);

  // Get authentication details
  const authObject = await auth();
  console.log("Auth Object:", authObject);

  // Redirect unauthenticated users trying to access protected routes
  if (isProtectedRoute(req) && !authObject?.userId) {
    console.log("User not logged in. Redirecting to /Sign-in...");
    return Response.redirect(new URL("/Sign-in", req.url));
  } else {
    console.log("User is authenticated or route is not protected.");
  }
});

// Ensure middleware applies correctly to /Cart and all subpaths
export const config = {
  matcher: ["/Cart/:path*"], // Covers `/Cart` and subpages
};
