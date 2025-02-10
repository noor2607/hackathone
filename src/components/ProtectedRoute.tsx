"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.push("/Sign-in"); 
      }
      setCheckingAuth(false);
    }
  }, [isSignedIn, isLoaded, router]);

  if (checkingAuth) {
    return <p className="text-center mt-10">Checking authentication...</p>; // Optional loading state
  }

  return <>{children}</>;
}
