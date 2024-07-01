"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

// Định nghĩa kiểu cho props
interface ErrorPageProps {
    error: Error;
  }

function ErrorPage(props: ErrorPageProps) {
  const {error} = props;
  
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-4">
      <h2 className="text-destructive text-4xl">Something went wrong!</h2>
      <Button asChild>
        <Link href={"/"}>Go back to home</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;