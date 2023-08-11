import LandingPage from "@/features/LandingPage";
import Loading from "@/features/loading";
import Image from "next/image";
export default function Home() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <Loading />
      <LandingPage />
    </div>
  );
}
