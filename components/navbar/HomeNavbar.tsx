import Image from "next/image";
import Link from "next/link";

const navItems = [
  { path: "/about", text: "Nosotros" },
  { path: "/pricing", text: "Precios" },
  { path: "/contact", text: "Contacto" },
];

export const HomeNavbar = () => {
  return (
    <header className="w-full bg-gradient-to-r from-brand-mist to-[#dde7e3] font-sans">
      <nav className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center gap-8 px-6 sm:px-10">
        <Link href="/" aria-label="EnergyRex - Inicio" className="flex items-center">
          <Image
            src="/logo-full.svg"
            alt="EnergyRex"
            width={196}
            height={36}
            priority
          />
        </Link>

        <div className="flex flex-1" />

        <ul className="flex items-center gap-7">
          {navItems.map(({ path, text }) => (
            <li key={path}>
              <Link
                href={path}
                className="text-[15px] font-medium text-slate-600 transition-colors hover:text-brand-green"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
