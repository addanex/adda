import { cn } from "cn";
import React from "react";

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("w-400 mx-auto", className)}>{children}</div>;
}
