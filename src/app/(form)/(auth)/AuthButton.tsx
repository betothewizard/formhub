import React from 'react';
import { Button } from "@/components/ui/button";
import type { IconType } from "react-icons";
interface AuthButtonProps {
  children: React.ReactNode;
  icon: IconType;
  ariaLabel?: string;
}

export default function AuthButton({ icon: Icon, ariaLabel = 'Button', children }: AuthButtonProps) {
  return (
    <Button size="home" aria-label={ariaLabel} className="gap-1">
      <Icon />
      {children}
    </Button>
  );
}