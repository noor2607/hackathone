"use client";

import { SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/Cart"); 
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) {
    return <p className="text-center mt-10">Loading...</p>; 
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn redirectUrl="/Cart" />
    </div>
  );
}
