import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LinkButton({href, children, ...innerProps}){
  return (
    <Link href={href} passHref>
      <Button {...innerProps}>{children}</Button>
    </Link>
  )
}