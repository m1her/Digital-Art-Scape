"use client";
import LandingPage from "@/features/LandingPage";
import Loading from "@/features/loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      {isLoading && <Loading />}
      <LandingPage />
    </div>
  );
}
