import type React from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="text-white font-bold text-xl uppercase">Upland</div>

      <div className="hidden md:flex items-center space-x-6">
        <NavItem href="#features">Features</NavItem>
        <NavItem href="#download">Download app</NavItem>
        <NavItem href="#screens">UI screens</NavItem>
        <NavItem href="#testimonials">Testimonials</NavItem>
        <NavItem href="#faq">FAQ</NavItem>

        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-700 ml-2">
          Free trial
        </Button>

        <div className="flex items-center text-white ml-4">
          <Phone className="h-4 w-4 mr-2 text-red-400" />
          <span>+1 742 65 84 122</span>
        </div>
      </div>

      <button className="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  )
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white/80 hover:text-white transition-colors">
      {children}
    </Link>
  )
}
