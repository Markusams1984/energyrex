import Link from "next/link"
import { HomeIcon } from "@primer/octicons-react"
import { AccessibilityInsetIcon } from "@primer/octicons-react"

const navItems = [
    { 
      path: '/about', 
      text: 'Nosotros', 
      icon: <AccessibilityInsetIcon className="mr-2" /> // <-- Agregamos el ícono aquí
    },
    { path: '/contact', text: 'Contacto' },
    { path: '/pricing', text: 'Precios' },
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        
        <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2"/>
        <span>Inicio</span>
        </Link>

        <div className="flex flex-1"></div>

        {
            navItems.map( navItem => (
                <Link key={ navItem.path } className="mr-2 flex items-center" href={ navItem.path }>
                { navItem.icon }
                { navItem.text }
                </Link>
            ))
        }

    </nav>
  )
}
