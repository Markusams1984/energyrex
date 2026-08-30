import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "@/components/active-link";
import { navItems, siteConfig } from "@/lib/site-config";
import { LIGHT_BAND, SECTION_CONTAINER } from "@/lib/styles";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <header className={LIGHT_BAND}>
      <nav className={cn(SECTION_CONTAINER, "flex h-[76px] items-center gap-8")}>
        <Link
          href="/"
          aria-label={`${siteConfig.name} - Inicio`}
          className="flex items-center"
        >
          <Image
            src="/logo-full.svg"
            alt={siteConfig.name}
            width={196}
            height={36}
            priority
          />
        </Link>

        <div className="flex flex-1" />

        <ul className="flex items-center gap-7">
          {navItems.map((navItem) => (
            <li key={navItem.path}>
              <ActiveLink {...navItem} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
