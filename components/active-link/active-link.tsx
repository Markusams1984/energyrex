"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  path: string;
  text: string;
  icon?: React.ReactNode;
}

export const ActiveLink = ({ path, text, icon }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === path;

  return (
    <Link
      href={path}
      className={cn(
        "flex items-center gap-2 text-[15px] font-medium text-slate-600 transition-colors hover:text-brand-green",
        isActive && "font-semibold text-brand-logo",
      )}
    >
      {icon}
      {text}
    </Link>
  );
};
