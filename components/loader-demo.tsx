"use client";
import CircularLoader from "@/components/circular-loader";
import { useEffect, useState } from "react";
export default function Demo() {
  const [progress, setProgress] = useState(0);

  const intervalTime = 100;
  // Example: increment progress every 1 second until it reaches 100
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  if (progress === 50) {
    alert("are you commited to improvement?");
  }

  if (progress === 100) {
    alert("reached 100");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <CircularLoader
        progress={progress}
        size={160}
        strokeWidth={12}
        strokeColor="text-[#3e63ed]"
        trackColor="text-[#c1d0ff]"
        className="text-4xl font-semibold tabular-nums "
      />
    </div>
  );
}
