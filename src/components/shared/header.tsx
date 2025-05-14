'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className="sticky top-6 z-50 flex justify-center">
      <div
        className="flex items-center justify-between gap-8 px-6 py-3 h-16 
        bg-white/80 backdrop-blur rounded-full shadow-xl border border-gray-200 
        max-w-[90%] w-full md:w-auto"
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-black flex items-center justify-center">
            <Image
              src="/assets/cocoon-logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-black">
          {['Home', 'Services', 'VIP', 'Blog', 'Franchise', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="shrink-0">
          <Button
            size="sm"
            className="rounded-full bg-black text-white px-5 py-2 hover:bg-black/90"
          >
            Book an appointment
          </Button>
        </div>
      </div>
    </header>
  )
}
